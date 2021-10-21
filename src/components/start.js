import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause} from "@fortawesome/free-solid-svg-icons";

export default function Start({handleClickPlay, toggle}) {
    const Play = <FontAwesomeIcon icon={faPlay} />;
    const Pause = <FontAwesomeIcon icon={faPause} />;
    return (
        <button type={"button"} className={"start"} onClick={handleClickPlay}>
            {toggle === true && <i className={"icon"}>{Pause}</i>}
            {toggle === false && <i className={"icon"}>{Play}</i>}
        </button>
    );
}
