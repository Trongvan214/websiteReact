import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import WeatherPic from '../images/weatherapp.PNG'
// import AssignmentPic from '../images/assignment.PNG';
// import TicTacToePic from '../images/tictactoe.PNG';
import PhotowebPic from '../images/photoweb.PNG';
import TodoAppPic from '../images/todoapp.PNG';
import WebSitePic from '../images/website.PNG';
import Navbar from './nav/navbar';
import './portfolio.css';

export default class Portfolio extends Component {
    render(){
        return [
            <Navbar key="nav"/>,
            <div id="portfolio" key="content">
\               <div className="show-case">
                    <div className="item a1">
                        <Link to="https://trongvan214.github.io/Weather-App/" target="_blank">
                            <img src={WeatherPic} alt="my weather app"/>
                        </Link>
                    </div>
                    {/* <div className="item a2">
                        <Link to="https://trongvan214.github.io/AssignmentsTodo/" target="_blank">
                            <img src={AssignmentPic} alt="my assignment app" />
                        </Link>
                    </div> */}
                    <div className="item i1">
                        <Link to="https://trongvan214.github.io/PhotographyWeb/" target="_blank">
                            <img src={PhotowebPic} alt="my photography website" />
                        </Link>
                    </div>
                    <div className="item i2">
                        <Link to="https://trongvan214.github.io/ReactJsTodoApp/" target="_blank"> 
                            <img src={TodoAppPic} alt="my todo app" />
                        </Link>
                    </div>
                    <div className="item i3">
                        <Link to="https://trongvan214.github.io/websiteReact/" target="_blank"> 
                            <img src={WebSitePic} alt="my webiste" />
                        </Link>
                    </div>
                    {/* <div className="item a5">
                        <Link to="https://trongvan214.github.io/Tic-Tac-Toe/" target="_blank"> 
                            <img src={TicTacToePic} alt="my tic tac toe app" />
                        </Link>
                    </div> */}
                </div>
            </div>
        ]
    }
}