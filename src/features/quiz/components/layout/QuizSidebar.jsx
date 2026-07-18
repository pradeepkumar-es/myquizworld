import Styles from "./quizSidebar.module.css";
import { NumberBtn } from "../ui/NumberBtn";
export function QuizSidebar({ data, currentQue, setCurrentQue, visitedNum, visit, nonVisit, setVisit, solved, queResponse }) {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.statusBox}>
        <StatusBox value = {solved} text="Solved" color = "green" />
        <StatusBox value = {visitedNum} text="Visited" color = "orange" />
        <StatusBox value = {nonVisit} text="Not Visited" color = "#EFEFEF" />
      </div>
      <>
        <p className={Styles.qNumHeader}>Choose a question</p>
        <div className={Styles.qNumbers}>
          {data.map((item, index, array) => (
            <NumberBtn
              key={index}
              data={data}
              setCurrentQue={setCurrentQue}
              setVisit = {setVisit}
              srNum={index + 1}
              currentQue = {currentQue}
              queResponse = {queResponse}
              visit = {visit}
            />
          ))}
        </div>
      </>
    </div>
  );
}
function StatusBox({ text, color, value }) {
  const box = {
    width: "120px",
    height: "25px",
    textAlign:"center",
    margin:"5px",
    border: "none",
    borderRadius:"5px",
    // padding:"5px",
    backgroundColor:color,
    fontWeight:"bold",
  };
  return (
    <>
      <div style={box}>
        {text} : {value}
      </div>
    </>
  );
}
