import React, {Component} from 'react';
import video from '../img/video.mp4';
import logo from '../img/logo-big.png';

export default class NavigationBar extends Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        )
    }
}

