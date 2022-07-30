import {useState, useEffect} from "react";
import useClock from './useClock';


function GetClock() {
    const [time, ampm] = useClock();
    return (
        <div className={"App"}>
            <h1>
                {time}
                <span>
               &nbsp; {ampm}
            </span>
            </h1>
        </div>
    )

}

export default GetClock;