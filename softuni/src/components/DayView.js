import React, { Component } from 'react';
import './dayview.css';
import EventItem from './EventItem';

class DayView extends Component {

    render() {
        return (
            <div id="dayview">
                <div id="dayinfo">
                    <p class="day-text"><span class="bigger-font">{this.props.day} </span>
                    <span class="big-font">{this.props.month}</span></p>
                    <p class="year">{this.props.year} г.</p>
                    <span class="week-day">Пн.</span>
                </div>
                <div id="dayevents">
                    <EventItem/>
                </div>
            </div>
        );
    }
}

export default DayView;