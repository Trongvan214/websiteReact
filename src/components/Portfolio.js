import React, {Component} from 'react';
import { Image } from 'react-bootstrap';
import './css/Portfolio.css';

export default class Portfolio extends Component {
    render(){
        return (
            <div id="portfolio" key="content">
                <h1>Projects</h1>
                <div className="show-case">
                    <div className="item a1">
                        <a href="https://trongvan214.github.io/Weather-App/" rel="noopener noreferrer" target="_blank">
                            <Image src="/images/weatherapp.PNG"/>
                        </a>
                    </div>
                    <div className="item a2">
                    <a href="https://trongvan214.github.io/Tic-Tac-Toe/" rel="noopener noreferrer" target="_blank"> 
                            <Image src="/images/tictactoe.PNG"/>
                        </a>
                    </div>
                    <div className="item i1">
                        <a href="https://trongvan214.github.io/PhotographyWeb/" rel="noopener noreferrer" target="_blank">
                            <Image src="/images/photoweb.PNG"/>
                        </a>
                    </div>
                    <div className="item i2">
                        <a href="https://trongvan214.github.io/ReactJsTodoApp/" rel="noopener noreferrer" target="_blank"> 
                            <Image src="/images/todoapp.PNG"/>
                        </a>
                    </div>
                    <div className="item i3">
                        <a href="https://trongvan214.github.io/websiteReact/" rel="noopener noreferrer" target="_blank"> 
                            <Image src="/images/website.PNG"/>
                        </a>
                    </div>
                    <div className="item a5">
                        <a href="https://trongvan214.github.io/quizlet/" rel="noopener noreferrer" target="_blank"> 
                            <Image src="/images/quizlet.PNG"/>
                        </a>
                    </div>
                </div>
                <div className="github-link">
                    <a href="https://github.com/Trongvan214" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-github"></i>https://github.com/Trongvan214
                    </a>
                </div>
            </div>
        )
    }
}