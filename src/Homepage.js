import React from 'react';
import foodpic01 from './FoodImages/foodpic01.jpeg';
import foodpic02 from './FoodImages/foodpic02.jpg';
import foodpic03 from './FoodImages/foodpic03.jpg';
import foodpic04 from './FoodImages/foodpic04.jpg';
import foodpic05 from './FoodImages/foodpic05.jpg';
import foodpic06 from './FoodImages/foodpic06.jpg';


class Homepage extends React.Component {
  render() {
    return (
        <div>
        <p>Hey, it's a webpage! This could be tasty...</p>
        <img src={foodpic01} alt="Food."></img>
        <img src={foodpic02} alt="Food."></img>
        <img src={foodpic03} alt="Food."></img>
        <img src={foodpic04} alt="Food."></img>
        <img src={foodpic05} alt="Food."></img>
        <img src={foodpic06} alt="Food."></img>
        </div>
    );
  }
}

export default Homepage;