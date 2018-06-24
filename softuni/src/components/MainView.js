import React, { Component } from 'react';
import Toolbar from './Toolbar';
import SideTabBar from './SideTabBar';
import './mainview.css';
import MonthView from './MonthView';
import DayView from './DayView';

class MainView extends Component {

    render() {
        return (
            <div id="container">
                <Toolbar text="Test1"/>
                <div id="container-horizontal">
                    <SideTabBar/>
                    <MonthView/>
                </div>
            </div>
        );
    }
}

export default MainView;