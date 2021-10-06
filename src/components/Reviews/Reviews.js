import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  
export default function Reviews() {
    return (
      
            <>
              
              <div className="reviews">
              <h1 style={{ textAlign: "center" }}>Past Clients Reviews</h1>
                <Carousel breakPoints={breakPoints}>
                  <Item>One</Item>
                  <Item>Two</Item>
                  <Item>Three</Item>
                  <Item>Four</Item>
                  <Item>Five</Item>
                  <Item>Six</Item>
                  <Item>Seven</Item>
                  <Item>Eight</Item>
                </Carousel>
              </div>
            </>
          )
}
