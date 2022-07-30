import {useState} from "react";

function CarSelection() {
    const cars = ["BMV", "Audi", "Lexus", "Lamborghini"];
    const colors = ["green", "yellow", "black", "blue", "white"];

    const [color, setColor] = useState(colors[0]);
    const [car, setCar] = useState(cars[0]);

    const handleSelectedCar = (e) => {
        setCar(e.target.value)
    }

    const handleSelectedColor = (e) => {
        setColor(e.target.value)

    }

    return (
        <div className="App">
            <p>Select car &nbsp; <span>
               <select value={car}
                       onChange={handleSelectedCar}>
                   {cars.map((car, index) => (
                       <option key={index}>{car}</option>
                   ))}
               </select>
            </span></p>

            <p>Select color &nbsp; <span>
                <select value={color}
                        onChange={handleSelectedColor}

                >
                    {colors.map((color, index) => (
                        <option key={index}>{color}</option>
                    ))}
                </select>
            </span></p>

            <h2>You selected {car} with color is {color}</h2>
        </div>
    )


}

export default CarSelection;