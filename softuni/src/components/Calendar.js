import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'


class CalendarMonth extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
     
    }

    onChange(date) {
        this.setState({ date });
        this.props.onChange(date);
    }


    render() {
        return (
            <div>
            <Calendar
              className="calendar"
              tileClassName="item"
              onChange={(date) => {this.onChange(date)}}
              value={this.state.date}
            />
          </div>
        );
    }
}

export default CalendarMonth;