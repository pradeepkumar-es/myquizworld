import Styles from "./number.module.css";
export function NumberBtn({data, srNum, setCurrentQue, handleOption}){
   const queIndex = srNum-1;
    return(
        <button onClick={()=>{
            setCurrentQue(queIndex)
            handleOption(data, queIndex)
        }} className={Styles.qBtn}>{srNum}</button>
    )
}