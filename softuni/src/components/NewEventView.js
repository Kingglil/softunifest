import React, { Component } from 'react';
import Toolbar from "./Toolbar";
import Title from "./Title";
import EventLocation from "./EventLocation";
import EventHours from './EventHours';
import EventDay from './EventDay';
import EventDescription from './EventDescription';
import './button.css';
import PostBank from '../res/post.png';



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
                <img src={PostBank}></img>
                <button className="default-button" >Потвърди</button>
                <button className="default-button1">Откажи</button>
            </div>
        );
    }
}

export default NewEventView