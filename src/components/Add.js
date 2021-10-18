import React from "react";

export default function Add({ timer }){
    function addTime(){
        timer = timer + 60
    }
    return(
        <button onClick={addTime} className="add"><i className="fas fa-plus fa-3x"></i></button>
    )
}