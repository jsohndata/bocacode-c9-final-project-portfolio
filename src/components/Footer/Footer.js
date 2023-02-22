import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
    const repoUrl = "";

    return (
        <footer className="container-fluid">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <a href={repoUrl} target="_blank" rel="noreferrer" >
                        <img src="/images/logo-github.svg" alt="Github" />
                        <p><small>See Code in Github</small></p>
                    </a>
                </Col>
            </Row>
        </footer>
    )
}
