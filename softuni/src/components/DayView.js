import React, { Component } from 'react';
import './dayview.css';
import EventItem from './EventItem';

class DayView extends Component {

    convertToBgMonth(name) {
        if(name == "Jan") {
            return "Януари";
        }
        else if(name == "Feb") {
            return "Февруари"
        }
        else if(name == "Mar") {
            return "Март"
        }
        else if(name == "Apr") {
            return "Април"
        }
        else if(name == "May") {
            return "Май"
        }
        else if(name == "Jun") {
            return "Юни"
        }
        else if(name == "Jul") {
            return "Юли"
        }
        else if(name == "Aug") {
            return "Август"
        }
        else if(name == "Sep") {
            return "Септември"
        }
        else if(name == "Oct") {
            return "Октомври"
        }
        else if(name == "Dec") {
            return "Декември"
        }
    }

    convertToBgDay(name) {
        if(name == "Mon") {
            return "Пон.";
        }
        else if(name =="Tue") {
            return "Вт.";
        }
        else if(name == "Wed") {
            return "Ср.";
        }
        else if(name == "Thu") {
            return "Чет.";
        } 
        else if(name == "Fri") {
            return "Пет.";
        }
        else if(name == "Sat") {
            return "Съб.";
        }
        else if(name == "Sun") {
            return "Нед.";
        }
    }

    render() {
        return (
            <div id="dayview">
                <div id="dayinfo">
                    <p class="day-text"><span class="bigger-font">{this.props.day} </span>
                    <span class="big-font">{this.convertToBgMonth(this.props.month)}</span></p>
                    <p class="year">{this.props.year} г.</p>
                    <span class="week-day">{this.convertToBgDay(this.props.weekday)}</span>
                </div>
                <div id="dayevents">
                    <EventItem/>
                    <EventItem/>
                    <EventItem/>
                </div>
            </div>
        );
    }
}

export default DayView;