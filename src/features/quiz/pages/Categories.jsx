import React from "react";
import { CategoryCard } from "../components/CategoryCard";
import { quizAPI } from "../services/quizAPI";
export default function Categories() {
  const container = {
    display: "flex",
    margin: "10px",
    flexWrap: "wrap",
    borderRadius: "10px",
    justifyContent: "center",
    
}
const categories = ["Mixed Category","General Knowledge", "Entertainment: Books", "Entertainment: Film", "Entertainment: Music",
  "Entertainment: Musicals & Theatres", "Entertainment: Television", "Entertainment: Video Games", 
  "Entertainment: Board Games", "Science & Nature", "Science: Computers", "Science: Mathematics", "Mythology", 
  "Geography", "History", "Politics", "Arts", "Celebrities", "Animals", "Vehicels", "Entertainment: Comics",
  "Science: Gadgets", "Entertainment: Japnese Anime & Manga", "Entertainment: Cartoon & Animations"
 ] //don't change the order; from api, category number is 9 to 32 (for General Knowledge to Cartoon & Animation)

 async function handleCategory(url){ //here this is called so that quiz data get loaded and cached and whenever
                                     //quiz page display, it get from cached memory for particular categpry
  const data = await quizAPI(url);
  console.log("call from categories");
  console.log(data);
 }
  return (
    <div style={container}>
      {
        categories.map((category, i)=>{
          return <CategoryCard key={i} category={category} categoryNum = {i+8}/>
        })
      }
    </div>
  );
}
