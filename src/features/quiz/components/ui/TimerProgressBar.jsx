import Styles  from "./timerProgressBar.module.css";
import {useEffect, useState} from "react";
export function TimerProgressBar({timeLimit, nextQue}){
    // const [timer, setTimer] = useState(0);
    useEffect(()=>{
        let time = timeLimit
      let timeoutId =  setTimeout(()=>{
            // nextQue(); //call next Que on each question timeLimit 
        }, time*1000)
        return () =>{
            clearTimeout(timeoutId);
        }
    },[timeLimit])
    const progressBar = {
        backgroundColor : "green",
        // width:`${widthPercent}%`,
        animationDuration : `${timeLimit}s`
    }
    return (
        <div style = {{border : '1px solid black'}}>
            <div style = {progressBar} className={Styles.progressBar}></div>
        </div>
    )
}