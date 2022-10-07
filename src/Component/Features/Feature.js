import React from "react";
import Card from "./Card";
import './features.css';
import data from './FeaturesApi'

const Feature = () => {
  return (
    <>
      <section className="features top" id="features">
        <div className="container">
          <div className="heading">
            <h4>Features</h4>
            <h1>What I Do</h1>
          </div>

          <div className="content grid">
            {data.map((val,idx)=>{
              return  <Card key={idx} image={val.image} title={val.title} desc={val.desc} />
            })}
           
          </div>  
        </div>
      </section>
    </>
  );
};

export default Feature;
