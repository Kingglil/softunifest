import React, { Component } from 'react';
import './input.css'

class EventHours extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onHoursChanged(event.target.value);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Hours"  />
            </form>
        );
    }
}

export default EventHours;
