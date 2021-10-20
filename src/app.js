import React from "react";
import Count from "./components/count";
import Add from "./components/add";
import Substr from "./components/substr";
import Start from "./components/start";
import Reset from "./components/reset";

export default function App() {
    const [seconds, setSeconds] = React.useState(0); // Time for Pomodoro
    const [timeSet, setTimeSet] = React.useState(0); // copy Time for Reset
    const [toggle, setToggle] = React.useState(false); // Button Play/Pause
    const percentage = timeSet / seconds;
    console.log(percentage);
    // switch Button Play/Pause
    function handleClickPlay() {
        if (toggle === true) {
            setToggle(false);
        } else {
            setToggle(true);
        }
    }
    React.useEffect(() => {
        if (toggle === true) {
            if (seconds > 0) {
                setTimeout(() => setSeconds(seconds - 1), 1000);
            }
        }
    });
    // Button Increment 1 by 1 minute
    function addTime() {
        const newSeconds = seconds + 60;
        const newTimeSet = timeSet + 60;
        if (newSeconds < 0) {
            setSeconds(0);
            setTimeSet(0);
        } else {
            setSeconds(newSeconds);
            setTimeSet(newTimeSet);
        }
    }
    // Button Decrement 1 by 1 minute
    function decrSeconds() {
        const newSeconds = seconds - 60;
        const newTimeSet = timeSet - 60;
        if (newSeconds < 0) {
            setSeconds(0);
            setTimeSet(0);
        } else {
            setSeconds(newSeconds);
            setTimeSet(newTimeSet);
        }
    }
    // Button Reset
    function reset() {
        const newTimeSet = timeSet;
        setSeconds(newTimeSet);
    }
    return (
        <>
            <h1>{"Pomodoro"}</h1>
            <Count seconds={seconds} percentage={percentage} />
            <Add addTime={addTime} toggle={toggle} />
            <Substr decrSeconds={decrSeconds} toggle={toggle} />
            <Start handleClickPlay={handleClickPlay} />
            <Reset reset={reset} toggle={toggle} />
        </>
    );
}
