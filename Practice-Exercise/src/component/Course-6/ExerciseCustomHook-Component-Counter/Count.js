import {useIncrement} from "./useIncrement";


function Count() {
    const [number1, increase1] = useIncrement(0);
    const [number2, increase2] = useIncrement(0, 2);

    return (
        <div className={"App"}>
            <p>Count 1: {number1}</p>
            <button onClick={increase1}
                    style={{
                        cursor: "pointer"
                    }}
            >Add 1</button>
            <p>Count 2: {number2}</p>
            <button onClick={increase2}
                    style={{
                        cursor: "pointer"
                    }}
            >Add 2</button>
        </div>
    )

}

export default Count