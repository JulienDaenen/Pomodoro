import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus} from "@fortawesome/free-solid-svg-icons";

export default function substr({decrSeconds, toggle}) {
    const Minus = <FontAwesomeIcon icon={faMinus} />;
    return (
        <button
            type={"button"}
            onClick={toggle ? null : decrSeconds} // Stop Click for Decrement
            className={"substr"}>
            <i className={"icon"}>{Minus}</i>
        </button>
    );
}
