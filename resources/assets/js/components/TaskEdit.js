import Axios from 'axios';
import React, { Component } from 'react';

class TaskEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
        this.getTask      = this.getTask.bind(this);
        this.updateTask   = this.updateTask.bind(this);
    }
    handleChange(e) {
        this.setState({
            name: e.target.value,
        })
    }
    getTask(id) {
        Axios
            .get(`tasks/${id}/edit`)
            .then(response => {
                this.setState({
                    name: response.data.task,
                })
            })
    }
    updateTask(id) {
        e.preventDefault();
        Axios
            .put(`tasks/${id}`, {
                name: this.state.name,
            })
            .then(response => {
                this.setState({
                    name: response.data.name
                })
            })
    }
    componentDidMount() {
        this.getTask();
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <form onSubmit={this.updateTask}>
                                <textarea
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    className='form-control'
                                    rows="5"
                                    maxLength="255"
                                    required>
                                    </textarea>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskEdit;
