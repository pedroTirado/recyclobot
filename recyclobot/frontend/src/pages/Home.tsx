
import { Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// styles
import { center_div } from "../styles";
import { Camera } from "../components";
import '../index.css';

const page_style = {
  backgroundColor: '#9cd5a5',
  paddingTop: "4%",
  paddingBottom: "2%"
};

// const row_style = {
//   marginTop: "10%",
// };

const Home = () => {
  return (
    <Container style={page_style}>
      <div style={center_div}>
        <div>
          <div style={center_div}>
            <h1>Recyclobot</h1>
          </div>

          {/* <div style={
          }>
            <Card style={center_div}>
              <Card.Body style={{ padding: "75%" }}>Camera</Card.Body>
            </Card>
          </div> */}

          <div>
            <Camera />
          </div>

          {/* <Link to="/tutorial" style={{ textDecoration: "none" }}>
            <Card>
              <Card.Body>Tutorial</Card.Body>
            </Card>
          </Link>
          
          <Link to="/tutorial" style={{ textDecoration: "none" }}>
            <Button>Tutorial</Button>
          </Link> */}

          <div style={center_div}>
            <h2>Tutorial</h2>
            <p>1. Click the camera icon</p>
            <p>2. Take a picture</p>
            <p>3. Find out whether it’s recyclable or not!</p>
          </div>

          <div style={center_div}>
            <h2 style={{ marginTop: "5%" }}>Recyclable Materials</h2>
            <ul>
              <li>Paper</li>
              <li>Cardboard</li>
              <li>Metal</li>
              <li>Glass</li>
              <li>Plastics*</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
