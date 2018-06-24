import React, { Component } from 'react';
import './dayview.css';
import EventItem from './EventItem';

class Schedules extends Component {

    render() {
        return (
                <div id="dayevents">
                    <EventItem/>
                </div>

        );
    }
}

export default Schedules;