const http = require("http");

const predictImage = function (baseString) {
  var path = require("path");
  var endpointId = "657252866712403968";
  var project = "recyclobot";
  var location = "us-central1";
  const aiplatform = require("@google-cloud/aiplatform");
  const { instance, params, prediction } =
    aiplatform.protos.google.cloud.aiplatform.v1.schema.predict;

  const { PredictionServiceClient } = aiplatform.v1;

  const clientOptions = {
    apiEndpoint: "us-central1-aiplatform.googleapis.com",
    keyFilename: path.join(__dirname, "credentials", "credentials.json"),
  };

  const predictionServiceClient = new PredictionServiceClient(clientOptions);

  async function predictImageClassification() {
    if (baseString == "") return baseString;
    const endpoint = `projects/${project}/locations/${location}/endpoints/${endpointId}`;

    const parametersObj = new params.ImageClassificationPredictionParams({
      confidenceThreshold: 0.5,
      maxPredictions: 5,
    });
    const parameters = parametersObj.toValue();

    const image = baseString;
    const instanceObj = new instance.ImageClassificationPredictionInstance({
      content: image,
    });
    const instanceValue = instanceObj.toValue();

    const instances = [instanceValue];
    const request = {
      endpoint,
      instances,
      parameters,
    };

    const [response] = await predictionServiceClient.predict(request);
    const predictions = response.predictions;
    for (const predictionValue of predictions) {
      const predictionResultObj =
        prediction.ClassificationPredictionResult.fromValue(predictionValue);
      for (const [i, label] of predictionResultObj.displayNames.entries()) {
      }
      return predictionResultObj.displayNames[0];
    }
  }
  return predictImageClassification();
};

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "X-Requested-With, Content-Type",
    });
    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();

        predictImage(body.substring(16, body.length - 3)).then(function (
          result
        ) {
          response.end(result);
        });
      });
  })
  .listen(8080);
