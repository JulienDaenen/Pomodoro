import React from "react";

export default function Time15({add5, toggle}) {
    return (
        <button
            type={"button"}
            onClick={toggle ? null : add5} // Stop Click for Increment
            className={"timeButton"}>
            {"5"}
        </button>
    );
}
