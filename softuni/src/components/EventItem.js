import React, { Calendar } from 'react';
import './eventitem.css';
import './input.css'


                

class EventItem extends React.Component {
    
    render() {
        return (
            <div class="event-container">
                <div class="event-date">
                    <span>6</span><br/>
                    <span>Септември</span>
                </div>
                <div class="event-name">
                    <span>Ден на независимостта</span>
                </div>

            </div>
        );
    }
}

export default EventItem;