import React, { Calendar } from 'react';
import './eventitem.css';
import './input.css'


                

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

            </div>
        );
    }
}

export default EventItem;