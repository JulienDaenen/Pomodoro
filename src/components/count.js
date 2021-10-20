import React from "react";

export default function Count({seconds}) {
    const h = ~~(seconds / 3600); //hour //~~ = Math.floor()
    const m = ~~((seconds % 3600) / 60); //minutes
    const s = ~~((seconds % 3600) % 60); //seconds
    if (seconds > 0) {
        if (h < 1 && m > 9 && s > 9) {
            return (
                <div className={"timer"}>
                    {m}
                    {":"}
                    {s}
                </div>
            );
        } else if (h <= 9 && h >= 1 && m > 9 && s > 9) {
            return (
                <div className={"timer"}>
                    {"0"}
                    {h}
                    {":"}
                    {m}
                    {":"}
                    {s}
                </div>
            );
        } else if (h > 9 && m > 9 && s > 9) {
            return (
                <div className={"timer"}>
                    {h}
                    {":"}
                    {m}
                    {":"}
                    {s}
                </div>
            );
        } else if (h < 1 && m >= 0 && m <= 9 && s > 9) {
            return (
                <div className={"timer"}>
                    {"0"}
                    {m}
                    {":"}
                    {s}
                </div>
            );
        } else if (h <= 9 && h >= 1 && m >= 0 && m <= 9 && s > 9) {
            return (
                <div className={"timer"}>
                    {"0"}
                    {h}
                    {":"}
                    {"0"}
                    {m}
                    {":"}
                    {s}
                </div>
            );
        } else if (h > 9 && m >= 0 && m <= 9 && s > 9) {
            return (
                <div className={"timer"}>
                    {h}
                    {":"}
                    {"0"}
                    {m}
                    {":"}
                    {s}
                </div>
            );
        } else if (h < 1 && m > 9 && s >= 0 && s <= 9) {
            return (
                <div className={"timer"}>
                    {m}
                    {":"}
                    {"0"}
                    {s}
                </div>
            );
        } else if (h <= 9 && h >= 1 && m > 9 && s >= 0 && s <= 9) {
            return (
                <div className={"timer"}>
                    {"0"}
                    {h}
                    {":"}
                    {m}
                    {":"}
                    {"0"}
                    {s}
                </div>
            );
        } else if (h > 9 && m > 9 && s >= 0 && s <= 9) {
            return (
                <div className={"timer"}>
                    {h}
                    {":"}
                    {m}
                    {":"}
                    {"0"}
                    {s}
                </div>
            );
        } else if (h < 1 && m >= 0 && m <= 9 && s >= 0 && s <= 9) {
            return (
                <div className={"timer"}>
                    {"0"}
                    {m}
                    {":"}
                    {"0"}
                    {s}
                </div>
            );
        } else if (h <= 9 && h >= 1 && m >= 0 && m <= 9 && s >= 0 && s <= 9) {
            return (
                <div className={"timer"}>
                    {"0"}
                    {h}
                    {":"}
                    {"0"}
                    {m}
                    {":"}
                    {"0"}
                    {s}
                </div>
            );
        } else if (h > 9 && m >= 0 && m <= 9 && s >= 0 && s <= 9) {
            return (
                <div className={"timer"}>
                    {h}
                    {":"}
                    {"0"}
                    {m}
                    {":"}
                    {"0"}
                    {s}
                </div>
            );
        }
        return (
            <div className={"timer"}>
                {m}
                {":"}
                {s}
            </div>
        );
    } else if (h === 0 && m === 0 && s === 0) {
        return <div className={"timer"}>{"00:00"}</div>;
    }
}
