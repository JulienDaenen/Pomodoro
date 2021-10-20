import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRedo} from "@fortawesome/free-solid-svg-icons";

export default function Reset({reset, toggle}) {
    const Redo = <FontAwesomeIcon icon={faRedo} />;
    return (
        <button
            type={"button"}
            onClick={toggle ? null : reset} // Stop Click for Reset
            className={"reset"}>
            <i className={"icon"}>{Redo}</i>
        </button>
    );
}
