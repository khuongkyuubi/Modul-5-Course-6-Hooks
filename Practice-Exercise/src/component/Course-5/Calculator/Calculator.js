import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: "",
            firstNumber: "",
            secondNumber: ""
        }
    }

    handleAdd = () => {
        this.setState({...this.state, results: this.state.firstNumber + this.state.secondNumber})
    }
    handleSubtract = () => {
        this.setState({...this.state, results: this.state.firstNumber - this.state.secondNumber})
    }
    handleMulti = () => {
        this.setState({...this.state, results: this.state.firstNumber * this.state.secondNumber})
    }
    handleDiv = () => {
        this.setState({...this.state, results: (this.state.firstNumber / this.state.secondNumber).toFixed(2)})
    }

    render() {
        return (
            <div style={{marginLeft: "30px"}}>
                <h1>Calculator</h1>

                <input type="number"
                       value={this.state.firstNumber}
                       onChange={(e) => {
                           this.setState({...this.state, firstNumber: +e.target.value})
                       }}
                />
                <br/>
                <input type="number"
                       value={this.state.secondNumber}
                       onChange={(e) => {
                           this.setState({...this.state, secondNumber: +e.target.value})
                       }}
                />
                <p>Result: {this.state.results}</p>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleSubtract}>-</button>
                <button onClick={this.handleMulti}>*</button>
                <button onClick={this.handleDiv}>/</button>

            </div>
        )
    }


}

export default Calculator;