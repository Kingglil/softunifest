import React, { Component } from 'react';
import './dayview.css';

class DayView extends Component {

    render() {
        return (
            <div id="dayview">
                <div id="dayinfo">
                    <span class="bigger-font">23 </span>
                    <span class="big-font">Юни</span>
                </div>
                <div id="dayevents"></div>
            </div>
        );
    }
}

export default DayView;