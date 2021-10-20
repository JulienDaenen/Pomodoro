import React from "react";

export default function Start({handleClickPlay}) {
    return (
        <button type={"button"} className={"start"} onClick={handleClickPlay}>
            <i className={"fas fa-play fa-3x"} />
        </button>
    );
}
