import { Link } from "react-router-dom";
import { Button } from "../../../Components/ui/Button";

// A category card is a clickable tile for a specific quiz topic.
// When clicked, it navigates to the quiz page with the selected category in the URL.
export function CategoryCard({ category, categoryNum }) {
  const quizclass = {
    color: "black",
    border: "1px",
    margin: "20px",
    padding: "50px",
    width: "300px",
    backgroundColor: "rgb(255, 255, 255)",
    textAlign: "center",
    borderRadius: "10px",
  };

  return (
    <div style={quizclass}>
      <h2>{category}</h2>

      {/* The quiz route receives the category ID as a query parameter. */}
      <Link to={`/categories/quiz?amount=10&category=${categoryNum}&type=multiple`}>
        <Button text="Start" />
      </Link>
    </div>
  );
}
