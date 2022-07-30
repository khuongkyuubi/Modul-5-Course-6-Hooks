import {useEffect, useState} from "react";

function EffectDemo() {
    const list = ["Javascript", "PHP", "Java", ".Net"];
    const [selected, setSelected] = useState(list[0]);

    const handleChangeSelect = (e) => {
        setSelected(e.target.value);
    }
    useEffect(() => {
        let time = 3600;
        const timerId = setInterval(() => {
            console.log("You have selected " + selected + " after " + time + " s");
        }, time)

        // Clean up
        // call before callback
        // call before unmount
        return () => {
            console.log("Before you have selected " + selected);
            clearInterval(timerId);
            console.log("Timer id " + timerId + " destroyed!")
        }

    }, [selected])

    return (
        <div className={"App"}>
            <p>Courses:
                <span>
                    <select
                        value={selected}
                        onChange={handleChangeSelect}
                    >
                    {list.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                        </select>
                </span>
            </p>
            <h2>Your selected: {selected}</h2>


        </div>
    )


}

export default EffectDemo;