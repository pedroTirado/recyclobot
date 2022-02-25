import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// styles
import { center_div } from "../styles";

const Tutorial = () => {
  return (
    <div style={center_div}>
      <h1>Tutorial Page</h1>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Card>
          <Card.Body>Home</Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Tutorial;