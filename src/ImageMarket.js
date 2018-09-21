//This is where you buy images
import React from 'react';

var arrayofimages = [
    '/FoodImages/foodpic01.jpeg',
    '/FoodImages/foodpic02.jpg',
    '/FoodImages/foodpic03.jpg',
    '/FoodImages/foodpic04.jpg', 
    '/FoodImages/foodpic05.jpg', 
    '/FoodImages/foodpic06.jpg'
]

class ImageMarket extends React.Component {
    render() {
      return (
          <div>
              <p>Hey, it's a webpage! This could be tasty...</p>
              {arrayofimages.map(imageurl => <img src={imageurl} className="foodimages" alt="Food."/>)}
          </div>
      );
    }
  }
  
  export default ImageMarket;