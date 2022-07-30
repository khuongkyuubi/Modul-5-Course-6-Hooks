import React from "react";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            job: ""
        };
        this.inputRef = React.createRef();
    }

    handleChange = (e) => {
        this.setState({...this.state, job: e.target.value})
    }

    handleAdd = () => {
        this.setState({...this.state, jobs: [...this.state.jobs, this.state.job], job: ""});
        this.inputRef.current.focus();
    }



    render() {
        const {job, jobs} = this.state
        return (
            <div className={"App"}>
                <h1>Todo App</h1>
                <input type="text"
                       ref={ this.inputRef }
                       value={job}
                       onChange={this.handleChange}
                />
                <button onClick={this.handleAdd}>Add</button>
                <ul style={{
                    textAlign: 'left',
                    marginLeft: 100
                }}>
                    {jobs.map((job, i) => (
                        <li key={i}>{job}</li>
                    ))}
                </ul>




            </div>
        )
    }

}

export default TodoApp;