import {useState} from "react";


function useIncrement(init, amount = 1) {
    const [num, setNum] = useState(init);

    function increase() {
        setNum(num + amount);
    }

    return [num, increase]
}

export {useIncrement};
