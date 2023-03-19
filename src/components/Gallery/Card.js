import {Col, Card } from "../../utilis/Bootstrap.js";
import AccordianBar from "../AccordianBar/AccordianBar.js";

import styles from "./gallery.module.css";

export default function GalleryCard({ data:{id, title, prior, author, cover, content, youtube, url} }) {

  return (
    <Col key={id}>
      <Card 
        border="warning"
        className={styles.card}>
          <a href={url} 
            target="_blank" 
            rel="noreferrer"><Card.Img 
                src={cover} 
                alt={title}
                className="rounded-0" /></a>
        
        <article className="card-body">
          <header>
            <h2>{title}</h2>
            <p className="mb-0 pb-0"><strong>{author}</strong></p>
            <p className="mt-0 pt-0 prior"><small>{prior}</small></p>
          </header>

          <AccordianBar data={{id, content}} />                
                 
        </article>
      </Card>
    </Col>
  )
}
