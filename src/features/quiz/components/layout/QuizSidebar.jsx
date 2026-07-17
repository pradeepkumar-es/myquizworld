import Styles from "./quizSidebar.module.css";
import { NumberBtn } from "../ui/NumberBtn";
export function QuizSidebar({ data, setCurrentQue, solved }) {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.statusBox}>
        <StatusBox solved = {solved} text="Solved" color = "green" />
        <StatusBox text="Visited" color = "orange" />
        <StatusBox text="Not Visited" color = "#EFEFEF" />
      </div>
      <>
        <p className={Styles.qNumHeader}>Choose a question</p>
        <div className={Styles.qNumbers}>
          {data.map((item, index, array) => (
            <NumberBtn
              key={index}
              data={data}
              setCurrentQue={setCurrentQue}
              srNum={index + 1}
            />
          ))}
        </div>
      </>
    </div>
  );
}
function StatusBox({ text, color, solved }) {
  const box = {
    width: "120px",
    height: "25px",
    textAlign:"center",
    margin:"5px",
    border: "none",
    borderRadius:"5px",
    padding:"5px",
    backgroundColor:color,
    fontWeight:"bold",
  };
  return (
    <>
      <div style={box}>
        {text} : {solved}
      </div>
    </>
  );
}
