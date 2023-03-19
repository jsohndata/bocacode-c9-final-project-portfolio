import * as bs from "../../utilis/Bootstrap.js";

import styles from "./gallery.module.css";

export default function GalleryCard( { data:{id, title, prior, author, cover, content, youtube, url} } ) {

  return (
    <bs.Col key={id}>
      <bs.Card className={styles.card}>
        <a href={url} 
           target="_blank" 
           rel="noreferrer"><bs.Card.Img 
              src={cover} 
              alt={title}
              className="rounded-0" /></a>
        
        <article className="card-body">
          <header>
            <h2>{title}</h2>
            <p className="mb-0 pb-0"><strong>{author}</strong></p>
            <p className="mt-0 pt-0 prior"><small>{prior}</small></p>
          </header>
          
          <p>{content}</p>
        </article>
      </bs.Card>
    </bs.Col>
  )
}
