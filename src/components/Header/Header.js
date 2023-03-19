import {  Container, Row, Col } from "../../utilis/Bootstrap.js";
import NavMenu from '../NavMenu';

export default function Header() {
  return (
    <header>
      <Container className="mb-4">
        <NavMenu />

        <Row>
          <Col md={10}>
            <p className="site-intro">BocaCode's Cohort 9 (C-9) has successfully completed their final project after a challenging 10-week course filled with both <a href="https://photos.app.goo.gl/53iZfYyER9xnRaHX9" target="_blank" rel="noreferrer">highs and lows</a>. It is with great pleasure that we congratulate <a href="https://bocacode.com/candidates" target="_blank" rel="noreferrer">all 13 students</a> on their remarkable achievement.</p>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
