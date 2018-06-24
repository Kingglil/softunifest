import React, { Component } from 'react';
import './FAB.css';

class FAB extends Component {

    render() {
        return (
            <div>
                <button class="fab" onClick={() => {this.props.onClick()}}>+</button>
            </div>
        );
    }
}

export default FAB;