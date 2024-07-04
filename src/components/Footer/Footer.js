import { Container, Row, Col } from "../../utilis/Bootstrap.js";
import { Github } from 'react-bootstrap-icons';

export default function Footer() {
    const repoUrl = "https://github.com/jsohndata/bocacode-c9";

    return (
      <>
        <footer>
          <Container className="mt-5 mb-5">
            <Row className="justify-content-center text-center">
              <Col md={6}>
                <a href={repoUrl} target="_blank" rel="noreferrer" >
                    <Github color="#000000" size={27} />
                    <p><small>See Code in Github</small></p>
                </a>              
              </Col>
            </Row>
          </Container>
        </footer>

        <p id="mozarts-ghost"><a href="https://jsohndata.github.io/no-tiempo/mozartsghost?id=bcd09"
        rel="noreferrer"
        alt="Click on it and press control-shift."
        title="Click on it and press control-shift.">π</a></p>
      </>
    )
}
