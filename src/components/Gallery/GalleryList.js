import GalleryCard from "./GalleryCard.js";

import data from '../../data/data.json'; 

import * as bs from "../../utilis/Bootstrap.js";


export default function Gallery() {

  console.log({data})

  return (
    <section className="container">
      <bs.Row 
        xs={1} sm={2} lg={3} 
        className="g-3 justify-content-center">
          {data.map( (element) => {
            return <GalleryCard data={element} />;      
          })}
      </bs.Row>
    </section>
  )
}

 