import { Container, Row, Col } from "../../utilis/Bootstrap.js";

export default function Footer() {
    const repoUrl = "https://github.com/jsohndata/bocacode-c9";

    return (
      <footer>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <a href={repoUrl} target="_blank" rel="noreferrer" >
                  <img src="/images/logo-github.svg" alt="Github" />
                  <p><small>See Code in Github</small></p>
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}
