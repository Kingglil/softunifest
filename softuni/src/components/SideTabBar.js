import React, { Component } from 'react';
import './sidetabbar.css';
import cal from '../res/calendar.png';

class SideTabBar extends Component {
    
    onTabIconClick(index) {
        alert(index);
    }

    render() {
        return (
            <div id="sidetabbar">
                <a onClick={() => {this.onTabIconClick(0)}}><img class="tab-icon" src={cal}/></a>
                <a onClick={() => {this.onTabIconClick(1)}}><img class="tab-icon" src={cal}/></a>
                <a onClick={() => {this.onTabIconClick(2)}}><img class="tab-icon" src={cal}/></a>
            </div>
        );
    }
}

export default SideTabBar;