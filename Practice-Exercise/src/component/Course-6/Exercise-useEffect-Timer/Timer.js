import {useState, useEffect, useRef} from "react";

function Timer({count}) {
    const [input, setInput] = useState("")
    const [time, setTime] = useState("");

    const isMountRef = useRef(false)
    const timerRef = useRef()


    useEffect(() => {
        const timerId = setInterval(() => {
                console.log(isMountRef.current)
                if (isMountRef.current) {
                    if (time > 0) {
                        setTime(String(+time - 1));
                    } else if (time <= 0) {
                        clearInterval(timerId);
                        console.log(time, "finish")
                    }
                }
            }
            ,
            1000
        )

        // Cleanup function
        return () => {
            console.log("clearInterval id: ", timerId);
            clearInterval(timerId)
        }

    }, [time]);

    useEffect(() => {
        isMountRef.current = true;
    }, [])


    const handleClick = () => {
        setTime(input);


    }

    return (
        <div className={"App"}>
            <input type="number"
                   placeholder={"Put a number to countdown!"}
                   onChange={e => setInput(e.target.value)}
            />
            <button onClick={handleClick}>Start</button>
            <p>Count down from {time}</p>
        </div>
    )
}

export default Timer;