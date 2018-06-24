import React, { Calendar } from 'react';
import './eventitem.css';

<<<<<<< HEAD
class EventItem extends Component {
    
    render() {
        return (
            <div class="eventContainer">
                
=======
class EventItem extends React.Component {
    
    render() {
        return (
            <div class="event-container">
                <div class="event-date">
                    <span>23</span><br/>
                    <span>June</span>
                </div>
                <div class="event-name">
                    <span>Indepen as fdfsddf</span>
                </div>
>>>>>>> 961c5ac73cb16a0066f352535a54981f913a4110
            </div>
        );
    }
}

export default EventItem;