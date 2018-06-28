import React, {Component} from 'react';
import { Image } from 'react-bootstrap';
import './css/Portfolio.css';
import weatherImg from "../images/weatherapp.PNG";
import ticTacImg from "../images/tictactoe.PNG";
import PhotographyWebImg from "../images/photoweb.PNG";
import todoappImg from "../images/todoapp.PNG";
import quizletImg from "../images/quizlet.PNG";
import websiteImg from "../images/website.PNG";
import portBg from '../images/autumncover.jpg';
import baguide from '../images/baguide.PNG';

export default class Portfolio extends Component {
    render(){
        const background = {
            "background": `url(${portBg}) center center/ cover no-repeat`
        }
        return (
            <div style={background} id="portfolio" key="content">
                <h1>Projects</h1>
                <div className="show-case">
                    <div className="item a1">
                        <a href="https://trongvan214.github.io/Weather-App/" rel="noopener noreferrer" target="_blank">
                            <Image src={weatherImg}/>
                        </a>
                    </div>
                    <div className="item a2">
                    <a href="https://trongvan214.github.io/baguide/" rel="noopener noreferrer" target="_blank"> 
                            <Image src={baguide}/>
                        </a>
                    </div>
                    <div className="item i1">
                        <a href="https://trongvan214.github.io/PhotographyWeb/" rel="noopener noreferrer" target="_blank">
                            <Image src={PhotographyWebImg}/>
                        </a>
                    </div>
                    <div className="item i2">
                        <a href="https://trongvan214.github.io/ReactJsTodoApp/" rel="noopener noreferrer" target="_blank"> 
                            <Image src={todoappImg}/>
                        </a>
                    </div>
                    <div className="item i3">
                        <a href="https://trongvan214.github.io/websiteReact/" rel="noopener noreferrer" target="_blank"> 
                            <Image src={websiteImg}/>
                        </a>
                    </div>
                    <div className="item a5">
                        <a href="https://trongvan214.github.io/quizlet/" rel="noopener noreferrer" target="_blank"> 
                            <Image src={quizletImg}/>
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