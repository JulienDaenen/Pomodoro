import React from "react";

export default function substr({decrSeconds, toggle}) {
    return (
        <button
            type={"button"}
            onClick={toggle ? null : decrSeconds} // Stop Click for Decrement
            className={"substr"}>
            <i className={"fas fa-minus fa-3x"} />
        </button>
    );
}
