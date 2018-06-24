import React, { Component } from 'react';
import './monthview.css';
import CalendarMonth from './Calendar';

class MonthView extends Component {

    render() {
        return (
            <div id="monthview">
                <div id="month-season">test</div>
                <div id="month-month">
                    <CalendarMonth/>
                </div>
                <div id="month-events"></div>
            </div>
        );
    }
}

export default MonthView;