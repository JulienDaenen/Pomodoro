import React from "react";

export default function Time5({add15, toggle}) {
    return (
        <button
            type={"button"}
            onClick={toggle ? null : add15} // Stop Click for Increment
            className={"timeButton"}>
            {"15"}
        </button>
    );
}
