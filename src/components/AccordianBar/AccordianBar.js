import { Accordion, ListGroup } from "../../utilis/Bootstrap.js";
import { Youtube, PersonLinesFill, Laptop } from 'react-bootstrap-icons';

export default function AccordianBar({ data:{id, content, youtube, website, candidate } }) {

  return(
    <Accordion>     
           
      <Accordion.Item eventKey={id}>
        <Accordion.Header>Get the Full Story</Accordion.Header>

        <Accordion.Body>
          <p>{content}</p>
          
          <ListGroup>
            <ListGroup.Item action href={youtube}><Youtube color="#ff000099" size={27} /> YouTube</ListGroup.Item>
            <ListGroup.Item action href={candidate}><PersonLinesFill color="#413290" size={27} /> BocaCode Candidate</ListGroup.Item>
            <ListGroup.Item action href={website}><Laptop color="#2ab2ae" size={27} /> Website</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>

      </Accordion.Item>
    </Accordion>  
  );
}