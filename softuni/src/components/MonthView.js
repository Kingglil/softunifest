import React, { Component } from 'react';
import './monthview.css';
import CalendarMonth from './Calendar';
import winter from '../res/изтеглен файл.jpg'
import './mainview.css'



class MonthView extends Component {

    render() {
        return (
            <div id="monthview">
                <div id="month-season">
                    <img src={winter} className="season" >
                    </img>
                </div>
                <div id="month-month">
                    <CalendarMonth/>
                </div>
                <div id="month-events"></div>
            </div>
        );
    }
}

export default MonthView;