import React, { Component } from 'react';
import Toolbar from "./Toolbar";
import Title from "./Title";
import EventLocation from "./EventLocation";


class NewEventView extends Component {
    render() {
        return(
            <div>
                <Toolbar/>
                <Title/>
                <EventLocation/>
            </div>
        );
    }
}

export default NewEventView