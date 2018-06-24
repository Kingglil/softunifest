import React, { Component } from 'react';
import Toolbar from "./Toolbar";
import Title from "./Title";
import EventLocation from "./EventLocation";
import EventHours from './EventHours';
import EventDay from './EventDay';
import EventDescription from './EventDescription';


class NewEventView extends Component {
    render() {
        return(
            <div>
                <Toolbar text="Ново събитие">
                </Toolbar>
                <Title/>
                <EventLocation/>
                <EventHours/>
                <EventDay/>
                <EventDescription/>
            </div>
        );
    }
}

export default NewEventView