import React from "react";

export default function Count({ seconds, setSeconds }){
    React.useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        }
    });

    let m = Math.floor(seconds % 3600 / 60);//minutes
    let s = Math.floor(seconds % 3600 % 60);//seconds
    if(seconds > 0){
        if(m > 9 && s > 9){
            return(
                <div className="timer">{m}:{s}</div>
            )
        }else if(m >= 0 && m <= 9 && s > 9){
            return(
                <div className="timer">0{m}:{s}</div>
            )
        }else if(m > 9 && s >= 0 && s <= 9){
            return(
                <div className="timer">{m}:0{s}</div>
            )
        }else if(m >= 0 && m <= 9 && s >= 0 && s <= 9){
            return(
                <div className="timer">0{m}:0{s}</div>
            )
        }
        return(
            <div className="timer">{m}:{s}</div>
        )
    }else{
        return(
            <div className="timer">00:00</div>
        )
    }
}