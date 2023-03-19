import * as bs from "../../utilis/Bootstrap.js"

export default function Header() {
  return (
    <header className="container-fluid bg-secondary" aria-label="Header">
      <bs.Row className="justify-content-md-center">
        <bs.Col>
          <h1>C-9: Portfolio</h1>
        </bs.Col>
      </bs.Row>
    </header>
  );
}
