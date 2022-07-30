import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div className={"App"}>
            <h2>Giá trị {count}</h2>
            <button onClick={handleCount}>Count click!</button>
        </div>
    )


}

export default Counter;