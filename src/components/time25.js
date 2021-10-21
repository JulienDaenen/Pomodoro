import React from "react";

export default function Time25({add25, toggle}) {
    return (
        <button
            type={"button"}
            onClick={toggle ? null : add25} // Stop Click for Increment
            className={"timeButton"}>
            {"25"}
        </button>
    );
}
