import {Col, Card } from "../../utilis/Bootstrap.js";
import AccordionBar from "../AccordionBar/AccordionBar.js";

import styles from "./gallery.module.css";


export default function GalleryCard({ data: {id, title, prior, author, cover, content, youtube, website, candidate} }) {

  return (
    <Col key={id} className="button-effect">
      <Card className={styles.card}>
        <figure>
          <a href={website} target="_blank" rel="noreferrer"><Card.Img 
            src={cover} alt={title} className="rounded-0" /></a>
        </figure>
        
        <article className="card-body p-3">
          <header>
            <h2>{title}</h2>
            <p className="mb-0 pb-0 author">{author}</p>
            <p className="mt-0 pt-0 prior"><small>{prior}</small></p>
          </header>
          
          <AccordionBar data={{id, content, candidate, youtube, website}} />                 
        </article>
      </Card>
    </Col>
  )
}
