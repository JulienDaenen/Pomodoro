/* eslint-disable prettier/prettier */
import React from "react";
import Count from "./components/count";
import Add from "./components/add";
import Substr from "./components/substr";
import Start from "./components/start";
import Reset from "./components/reset";
import Time25 from "./components/time25";
import Time15 from "./components/time15";
import Time5 from "./components/time5";
import Reset0 from "./components/reset0";

export default function App() {
    const [seconds, setSeconds] = React.useState(0); // Time for Pomodoro
    const [timeSet, setTimeSet] = React.useState(0); // copy Time for Reset
    const [toggle, setToggle] = React.useState(false); // Button Play/Pause
    const percentage = (seconds / timeSet) * 100;
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
    // Add 25 minutes
    function add25() {
        const newSeconds = 1500;
        const newTimeSet = 1500;
        if (newSeconds < 0) {
            setSeconds(0);
            setTimeSet(0);
        } else {
            setSeconds(newSeconds);
            setTimeSet(newTimeSet);
        }
    }
    // Add 15 minutes
    function add15() {
        const newSeconds = 900;
        const newTimeSet = 900;
        if (newSeconds < 0) {
            setSeconds(0);
            setTimeSet(0);
        } else {
            setSeconds(newSeconds);
            setTimeSet(newTimeSet);
        }
    }
    // Add 5 minutes
    function add5() {
        const newSeconds = 300;
        const newTimeSet = 300;
        if (newSeconds < 0) {
            setSeconds(0);
            setTimeSet(0);
        } else {
            setSeconds(newSeconds);
            setTimeSet(newTimeSet);
        }
    }
    function reset0() {
        const newSeconds = seconds - seconds;
        const newTimeSet = timeSet - timeSet;
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
            <Count
                seconds={seconds}
                percentage={percentage}
                //backgroundPadding={10}
            />
            <div className={"button"}>
                <div className={"button_1"}>
                    <Add addTime={addTime} toggle={toggle} />
                    <Substr decrSeconds={decrSeconds} toggle={toggle} />
                </div>
                <div className={"button_2"}>
                    <Start handleClickPlay={handleClickPlay} toggle={toggle} />
                    <Reset reset={reset} toggle={toggle} />
                </div>
            </div>
            <div className={"time"}>
                <div className={"time_1"}>
                    <Time25 add25={add25} toggle={toggle} />
                    <Time15 add15={add15} toggle={toggle} />
                </div>
                <div className={"time_2"}>
                    <Time5 add5={add5} toggle={toggle} />
                    <Reset0 reset0={reset0} toggle={toggle} />
                </div>
            </div>
        </>
    );
}
