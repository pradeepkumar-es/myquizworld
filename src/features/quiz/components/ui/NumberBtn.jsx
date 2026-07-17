import Styles from "./number.module.css";
export function NumberBtn({data, srNum, setCurrentQue}){
   const queIndex = srNum-1;
    return(
        <button onClick={()=>{
            setCurrentQue(queIndex)
        }} className={Styles.qBtn}>{srNum}</button>
    )
}