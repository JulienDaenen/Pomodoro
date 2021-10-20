import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";

export default function Start({handleClickPlay}) {
    const Play = <FontAwesomeIcon icon={faPlay} />;
    return (
        <button type={"button"} className={"start"} onClick={handleClickPlay}>
            <i className={"icon"}>{Play}</i>
        </button>
    );
}
