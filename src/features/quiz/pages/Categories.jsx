import React from "react";
import { CategoryCard } from "../components/CategoryCard";
import { quizAPI } from "../services/quizAPI";

// This page shows all available quiz categories.
// The category list matches the OpenTDB category numbers and must stay in order.
export default function Categories() {
  const container = {
    display: "flex",
    margin: "10px",
    flexWrap: "wrap",
    borderRadius: "10px",
    justifyContent: "center",
  };

  // Keep the same order as the external quiz API categories.
  // The category numbers start around 9 and continue up to 32.
  const categories = [
    "Mixed Category",
    "General Knowledge",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Musicals & Theatres",
    "Entertainment: Television",
    "Entertainment: Video Games",
    "Entertainment: Board Games",
    "Science & Nature",
    "Science: Computers",
    "Science: Mathematics",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Arts",
    "Celebrities",
    "Animals",
    "Vehicels",
    "Entertainment: Comics",
    "Science: Gadgets",
    "Entertainment: Japnese Anime & Manga",
    "Entertainment: Cartoon & Animations",
  ];

  // This helper is kept for future use when pre-loading category data.
  // It fetches and caches category question sets before the quiz page is used.
  async function handleCategory(url) {
    const data = await quizAPI(url);
    console.log("call from categories");
    console.log(data);
  }

  return (
    <div style={container}>
      {categories.map((category, i) => {
        return <CategoryCard key={i} category={category} categoryNum={i + 8} />;
      })}
    </div>
  );
}

