import React, { Component } from 'react';
import './dayview.css';

class DayView extends Component {

    render() {
        return (
            <div id="dayview">
                <div id="dayinfo">
                    <p class="day-text"><span class="bigger-font">23 </span>
                    <span class="big-font">Юни</span></p>
                    <p class="year">2018 г.</p>
                    <span class="week-day">Пн.</span>
                </div>
                <div id="dayevents"></div>
            </div>
        );
    }
}

export default DayView;