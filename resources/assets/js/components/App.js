import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tasks: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTasks  = this.renderTasks.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleChange(e) {
        this.setState({
            name: e.target.value,
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        Axios
            .post('/tasks', {
                name: this.state.name
        })
            .then(response => {
                this.setState({
                    tasks: [response.data, ...this.state.tasks],
                    name: ''
                });
        })
    }
    renderTasks() {
        return this.state.tasks.map(task => (
            <div key={task.id} className='media'>
                <div className='media-body'>
                    <div>
                        {task.name}
                        <Link to={`/${task.id}/edit`} className='btn btn-sm btn-success float-right'>Update</Link>
                        <button onClick={() => this.handleDelete(task.id)} className='btn btn-sm btn-warning float-right'>Delete</button>
                    </div>
                </div>
            </div>
        ));
    }
    getTasks() {
        Axios.get('/tasks').then(response =>
            this.setState({
                tasks: [...response.data.tasks]
            })
        );
    }
    componentDidMount() {
        this.getTasks();
    }
    handleDelete(id) {
        const isNotId = task => task.id !== id;
        const updatedTasks = this.state.tasks.filter(isNotId);
        this.setState({ tasks: updatedTasks });
        Axios.delete(`/tasks/${id}`);
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>
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
                                    <button type='submit' className='btn btn-primary'>Create Task</button>
                                </form>
                                <hr />
                                { this.renderTasks() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
