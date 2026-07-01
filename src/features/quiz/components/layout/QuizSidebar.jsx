import Styles from "./quizSidebar.module.css";
import { NumberBtn } from "../ui/NumberBtn";
export function QuizSidebar ({data, setCurrentQue, handleOption}){
    return (
        <div className={Styles.sidebar}>
            <p>Choose a question</p>
            <div className={Styles.qNumbers}>
                {data.map((item, index, array)=>(
                    <NumberBtn key = {index} data = {data} setCurrentQue = {setCurrentQue} handleOption = {handleOption} srNum = {index+1}/>
                ))}
            </div>
        </div>
    )
}