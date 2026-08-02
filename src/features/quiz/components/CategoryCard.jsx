import { Link } from "react-router-dom";
import { Button } from "../../../Components/ui/Button";

// A category card is a clickable tile for a specific quiz topic.
// When clicked, it navigates to the quiz page with the selected category in the URL.
export function CategoryCard({ category, categoryNum }) {
  const quizclass = {
    color: "#0f172a",
    margin: "18px",
    padding: "28px 22px",
    width: "280px",
    background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
    textAlign: "center",
    borderRadius: "18px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.05)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "18px",
  };

  return (
    <div style={quizclass}>
      <h2 style={{ fontSize: "1.2rem", lineHeight: 1.4 }}>{category}</h2>

      {/* The quiz route receives the category ID as a query parameter. */}
      <Link to={`/categories/quiz?amount=10&category=${categoryNum}&type=multiple`}>
        <Button text="Start" />
      </Link>
    </div>
  );
}
