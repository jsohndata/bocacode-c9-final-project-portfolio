import { Container, Row } from "../../utilis/Bootstrap.js";
import Card from "./Card.js";
import data from '../../data/data.json'; 

export default function Gallery() {

  console.log({data})

  return (
    <Container fluid>
      <Row 
        xs={1} sm={2} lg={3} 
        className="g-3 justify-content-center">
          {data.map( (element) => {
            return !element 
            ? (<p>Loading</p>)
            : (<Card data={element} />)
          })}
      </Row>
    </Container>
  )
}
