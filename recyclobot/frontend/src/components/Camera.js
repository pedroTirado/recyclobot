import React, { useRef, useState, useEffect } from "react";
import { callEndpoint } from "./callEndpoint";

const Camera = () => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: "environment", width: "100%" },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePhoto = () => {
    const width = 300;
    const height = width / (4 / 3);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.widht = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);

    callEndpoint(photoRef.current.toDataURL().substring(22)).then(function (
      response
    ) {
      var result =
        response.data.charAt(0).toUpperCase() + response.data.slice(1);
      if (response.data === "trash") {
        document.getElementById("result").innerHTML =
          result + ": Not Recyclable";
      } else if (response.data === "") {
        document.getElementById("result").innerHTML = "Please try again";
      } else {
        document.getElementById("result").innerHTML = result + ": Recyclable";
      }
    });
  };

  const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    ctx.clearRect(0, 0, photo.width, photo.height);

    setHasPhoto(false);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div>
      <div className="camera">
        <video ref={videoRef}></video>
        <button onClick={takePhoto}>Take Photo</button>
        <button onClick={closePhoto}> Close Photo </button>
      </div>

      <div className={"result " + (hasPhoto ? "hasPhoto" : "")}>
        <canvas ref={photoRef}></canvas>
      </div>

      <div id="result"></div>
    </div>
  );
};

export default Camera;
