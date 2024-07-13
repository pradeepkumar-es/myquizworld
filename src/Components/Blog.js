import React, { useState } from 'react'

export default function Blog() {
  const [color, setColor]= useState("red");
  const [age, setAge]=useState("20");
  const [year, setYear]=useState("2023");
  const [brand, setBrand]=useState("Adidas");

  //using object method
  const [car, setCar]=useState({
    brand2: "SUV",
    color: "Black",
    year: 2023
  });
  return (
    <div>
      blog section
      <h1>My Blog color is {color}</h1>
      <button type='button' onClick={()=>setColor("Green")}>update to Green</button>
      <p>I am now turned to {age} from {year} & I have one shoes of Brand {brand}.</p>
      <b>
        my Car {car.brand2} is color of{car.color} which i have bought is the year{car.year}.
      </b>
    </div>
  )
}
