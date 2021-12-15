/* eslint-disable prettier/prettier */
import React from "react";

export default function Reset0({reset0, toggle}) {
    return (
        <button
            type={"button"}
            onClick={toggle ? null : reset0} // Stop Click for Increment
            className={"timeButton"}>
            {"0"}
        </button>
    );
}
