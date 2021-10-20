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
            <i className={"fas fa-plus fa-3x"} />
            {Plus}
        </button>
    );
}
