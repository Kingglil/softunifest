import React, { Component } from 'react';
import Toolbar from './Toolbar';
import SideTabBar from './SideTabBar';
import './mainview.css';
import MonthView from './MonthView';
import DayView from './DayView';
import FAB from './FAB';
import Schedules from "./Schedules";

class ScheduleView extends Component {

    render() {
        return (
            <div id="container">
                <Toolbar text="Твоят календар"/>
                <div id="container-horizontal">
                    <SideTabBar/>
                    <Schedules/>
                </div>
                <FAB/>
            </div>
        );
    }
}

export default ScheduleView;