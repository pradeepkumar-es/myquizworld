import React from "react";
import { CategoryCard } from "../components/CategoryCard";
export default function Categories() {
  const container = {
    display: "flex",
    margin: "10px",
    flexWrap: "wrap",
    borderRadius: "10px",
    justifyContent: "center",
    
}
  return (
    <div style={container}>
      <CategoryCard category={"class 5th"}/>
      <CategoryCard category={"class 5th"}/>
      <CategoryCard category={"class 5th"}/>
      <CategoryCard category={"class 5th"}/>
      <CategoryCard category={"class 5th"}/>
      <CategoryCard category={"class 5th"}/>
      <CategoryCard category={"class 5th"}/>
      <CategoryCard category={"class 5th"}/>
      <CategoryCard category={"class 5th"}/>
      <CategoryCard category={"class 5th"}/>
      <CategoryCard category={"class 5th"}/>
      <CategoryCard category={"class 5th"}/>
    </div>
  );
}
