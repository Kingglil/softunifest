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
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            location: "",
            hours: "",
            day: "",
            description: ""
        }
    }

    onSubmit() {
        this.props.onCreate();
    }

    onExit() {
        this.props.onExit();
    }

    render() {
        console.log(this.state);
        return(
            <div>
                <Toolbar text="Ново събитие"/>
                <Title onTitleChanged={(title) => {this.setState({title: title})}}/>
                <EventLocation onLocationChanged={(location) => {this.setState({location: location})}}/>
                <EventHours onHoursChanged={(hours) => {this.setState({hours: hours})}}/>
                <EventDay onDayChanged={(day) => {this.setState({day: day})}}/>
                <EventDescription onDescChanged={(desc) => {this.setState({description: desc})}}/>
                <img src={PostBank}></img>
                <button className="default-button" >Потвърди</button>
                <button className="default-button1">Откажи</button>
            </div>
        );
    }
}

export default NewEventView