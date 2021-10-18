import React from "react";
import Count from "./components/Count";
import Add from "./components/Add";
import Substr from "./components/Substr";
import Start from "./components/Start";
import Reset from "./components/Reset"

export default function App(){

    let timer = 10
    const [seconds, setSeconds] = React.useState(timer);
    
    function addTime(){
        timer = timer + 60
        console.log(timer);
    }

    return (
        <>
            <h1>Pomodoro</h1>
            <Count seconds={seconds} setSeconds={setSeconds}/>
            <Add timer={timer}/>
            <Substr />
            <Start />
            <Reset />
        </>
    );
}