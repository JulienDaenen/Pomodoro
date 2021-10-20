import React from "react";
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Count({seconds, percentage}) {
    const h = ~~(seconds / 3600); //hour //~~ = Math.floor()
    const m = ~~((seconds % 3600) / 60); //minutes
    const s = ~~((seconds % 3600) % 60); //seconds
    if (seconds > 0) {
        //between 00:10:10 & 00:59:59
        if (h < 1 && m > 9 && s > 9) {
            return (
                <CircularProgressbar
                    className={"timer"}
                    value={percentage}
                    text={`${m}:${s}`}
                />
            );
        }
        // between 01:10:10 & 09:59:59
        else if (h <= 9 && h >= 1 && m > 9 && s > 9) {
            return (
                <CircularProgressbar
                    className={"timer"}
                    value={percentage}
                    text={`0${h}:${m}:${s}`}
                />
            );
        }
        //between 10:10:10 & ..:59:59
        else if (h > 9 && m > 9 && s > 9) {
            return (
                <CircularProgressbar
                    className={"timer"}
                    value={percentage}
                    text={`${h}:${m}:${s}`}
                />
            );
        }
        //between 00:00:10 & 00:09:59
        else if (h < 1 && m >= 0 && m <= 9 && s > 9) {
            return (
                <CircularProgressbar
                    className={"timer"}
                    value={percentage}
                    text={`0${m}:${s}`}
                />
            );
        }
        //between 01:00:10 & 09:09:59
        else if (h <= 9 && h >= 1 && m >= 0 && m <= 9 && s > 9) {
            return (
                <CircularProgressbar
                    className={"timer"}
                    value={percentage}
                    text={`0${h}:0${m}:${s}`}
                />
            );
        }
        //between 10:00:10 & ..:09:59
        else if (h > 9 && m >= 0 && m <= 9 && s > 9) {
            return (
                <CircularProgressbar
                    className={"timer"}
                    value={percentage}
                    text={`${h}:0${m}:${s}`}
                />
            );
        }
        //between 00:10:00 & 00:59:09
        else if (h < 1 && m > 9 && s >= 0 && s <= 9) {
            return (
                <CircularProgressbar
                    className={"timer"}
                    value={percentage}
                    text={`${m}:0${s}`}
                />
            );
        }
        //between 01:10:00 & 09:59:09
        else if (h <= 9 && h >= 1 && m > 9 && s >= 0 && s <= 9) {
            return (
                <CircularProgressbar
                    className={"timer"}
                    value={percentage}
                    text={`0${h}:${m}:0${s}`}
                />
            );
        }
        //between 10:10:00 & ..:59:09
        else if (h > 9 && m > 9 && s >= 0 && s <= 9) {
            return (
                <CircularProgressbar
                    className={"timer"}
                    value={percentage}
                    text={`${h}:${m}:0${s}`}
                />
            );
        }
        //between 00:00:00 & 00:09:09
        else if (h < 1 && m >= 0 && m <= 9 && s >= 0 && s <= 9) {
            return (
                <CircularProgressbar
                    className={"timer"}
                    value={percentage}
                    text={`0${m}:0${s}`}
                />
            );
        }
        //between 01:00:00 & 09:09:09
        else if (h <= 9 && h >= 1 && m >= 0 && m <= 9 && s >= 0 && s <= 9) {
            return (
                <CircularProgressbar
                    className={"timer"}
                    value={percentage}
                    text={`0${h}:0${m}:0${s}`}
                />
            );
        }
        //between 10:00:00 & ..:09:09
        else if (h > 9 && m >= 0 && m <= 9 && s >= 0 && s <= 9) {
            return (
                <CircularProgressbar
                    className={"timer"}
                    value={percentage}
                    text={`${h}:0${m}:0${s}`}
                />
            );
        }
        return (
            <CircularProgressbar
                className={"timer"}
                value={percentage}
                text={`${m}:${s}`}
            />
        );
    } else if (h === 0 && m === 0 && s === 0) {
        return (
            <CircularProgressbar
                className={"timer"}
                value={100}
                text={`00:00`}
            />
        );
    }
}
