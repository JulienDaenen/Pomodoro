import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default function Add({addTime, toggle}) {
    const Plus = <FontAwesomeIcon icon={faPlus} />;
    return (
        <button
            type={"button"}
            onClick={toggle ? null : addTime} // Stop Click for Increment
            className={"add"}>
            <i className={"icon"}>{Plus}</i>
        </button>
    );
}
