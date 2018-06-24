import React, { Component } from 'react';
import './monthview.css';
import CalendarMonth from './Calendar';
import winter from '../res/изтеглен файл.jpg';
import summer from '../res/maxresdefault.jpg';
import spring from '../res/images.jpg';
import autumn from '../res/pexels-photo-693521.jpeg'




class MonthView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            season: summer,
        }

    }

    onChange(date) {

        date = date.toString().split(' ');
        if(date[1]==='Jun' || date[1]==='Jul' || date[1]==='Aug'){
            this.setState({season: summer});
        }
        else if(date[1]==='Sep' || date[1]==='Oct' || date[1]==='Nov'){
            this.setState({season: autumn});
        }
        else if(date[1]==='Dec' || date[1]==='Jan' || date[1]==='Feb'){
            this.setState({season: winter});
        }
        else if(date[1]==='Mar' || date[1]==='Apr' || date[1]==='May'){
            this.setState({season: spring});
        }


    }

    render() {
        return (

            <div id="monthview">
                <div id="month-season">
                    <img src={this.state.season} className="season" >
                    </img>
                </div>
                <div id="month-month">
                    <CalendarMonth onChange={(date) => {this.onChange(date)}}/>
                </div>
                <div id="month-events"></div>
            </div>

        );
    }
}

export default MonthView;