import React from "react";
import Count from "./components/Count";

export default function App(){

    const [seconds, setSeconds] = React.useState(10);

    return (
        <>
            <h1>Pomodoro</h1>
            <Count className="timer" seconds={seconds} setSeconds={setSeconds}/>
            <button className="add">+</button>
            <button className="substr">-</button>
            <button className="start">start</button>
            <button className="reset">reset</button>
        </>
    );
}