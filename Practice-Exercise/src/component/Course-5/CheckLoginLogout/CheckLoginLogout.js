import React from 'react';
import Home from './Home';

class CheckLoginLogout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    handleLogin = () => {
        this.setState({isLoggedIn: true});
    }
    handleLogOut = () => {
        this.setState({isLoggedIn: false})
    }


    render() {
        const {isLoggedIn} = this.state;

        return (
            isLoggedIn ?
                <Home onLogOut={this.handleLogOut}/>
                :
                <div style={{textAlign: 'center'}}>
                    <div>
                        <h1>Please Login</h1>
                        <button onClick={this.handleLogin}>Login</button>
                    </div>
                </div>

        )
    }
}

export default CheckLoginLogout;