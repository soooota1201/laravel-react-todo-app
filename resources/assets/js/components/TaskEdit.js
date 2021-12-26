import Axios from 'axios';
import React, { Component } from 'react';

class TaskEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            task: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            name: e.target.value,
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.props.match.params.id);
        Axios
            .put(`/tasks/${this.props.match.params.id}`, {
                name: this.state.name,
                task: this.state.task
        })
            .then(response => {
                this.props.history.push('/');
        })
    }
    getTask() {
        Axios.get(`/tasks/${this.props.match.params.id}/edit`).then(response =>
            this.setState({
                task: response.data.task,
                name: response.data.task.name
            })
        );
    }
    componentDidMount() {
        this.getTask();
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Edit Task</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className='form-group'>
                                        <textarea
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                            className='form-control'
                                            rows="5"
                                            maxLength="255"
                                            placeholder='Create a new task' required></textarea>
                                    </div>
                                    <button type='submit' className='btn btn-primary'>Edit Task</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskEdit;
