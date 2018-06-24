import React, { Component } from 'react';
import Toolbar from './Toolbar';
import './input.css'

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onTitleChanged(event.target.value);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Title"  />
            </form>
        );
    }
}

export default Title;