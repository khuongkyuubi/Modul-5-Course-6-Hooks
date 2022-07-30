import React from "react";
import Hello from "./Hello"

class AlertHideComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
    }

    delete = () => {
        this.setState({display: false})
    }

    render() {
        return (
            <div style={{
                textAlign: 'center',
                padding: 30
            }}>
                {this.state.display && <Hello/>}

                <button onClick={this.delete}>Delete Hello component!</button>
            </div>
        )
    }
}

export default AlertHideComponent;
