import { Accordion } from "../../utilis/Bootstrap.js";

export default function AccordianBar({ data:{id, content} }) {

  return(
    <Accordion defaultActiveKey="1">     
           
      <Accordion.Item eventKey={id}>
        <Accordion.Header>Read More</Accordion.Header>

        <Accordion.Body><p>{content}</p></Accordion.Body>

      </Accordion.Item>
    </Accordion>  
  );
}