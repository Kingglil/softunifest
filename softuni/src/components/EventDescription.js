import React, { Component } from 'react';
import './input.css'

class EventDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <input type="text" className="description" value={this.state.value} onChange={this.handleChange} placeholder="Description"  />
            </form>
        );
    }
}

export default EventDescription;