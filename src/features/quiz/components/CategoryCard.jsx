import {Link} from "react-router-dom";
import { Button } from "../../../Components/ui/Button";
export function CategoryCard({category}){
    const quizclass = {
    color: "black",
    border: "1px",
    margin: "20px",
    padding: "50px",
    width: "283px",
    height: "54px",
    backgroundColor:" rgb(255, 255, 255)",
    textAlign: "center",
    borderRadius: "10px",
}
    return (
              <div style={quizclass} >
                <h2>{category}</h2>
                <Link to="/categories/quiz">
                  <Button text = "Start" />
                </Link>
              </div>
    )
}