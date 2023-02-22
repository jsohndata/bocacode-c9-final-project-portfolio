import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  return (
    <header className="container-fluid bg-secondary" aria-label="Header">
      <Row className="justify-content-md-center">
        <Col>
          <h1>Hi, I am H-One.</h1>
        </Col>
      </Row>
    </header>
  );
}
