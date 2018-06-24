import React, { Component } from 'react';
import './toolbar.css';

class Toolbar extends Component {

    render() {
        return (
            <div id="toolbar">

                <div id="toolbar-title">{this.props.text}</div>

            </div>
        );
    }
}

export default Toolbar;