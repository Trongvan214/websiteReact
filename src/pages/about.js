import React, {Component} from 'react';
import Navbar from './nav/navbar';
import './about.css';
import './skill.css';

export default class About extends Component {
    render(){
        return [
            <Navbar key="nav"/>,
            <section id="about" key="about">
                <div className="wrapper">
                    <div className="about-info">
                        <h1>About Me</h1>
                        <p>  My passion for coding started when I first took a 
                        programming class back in high school. I fell 
                        in love with it, and I've been coding ever since.
                        I make things from basics games to web apps with javascript.
                        I love to learn and experiences new things if it about coding.
                        At the moment, I am obsess with javascript because of the amazing things
                        you can do with just javascript and its frameworks. Also, I'm currently 
                        pursuing a bachalor degree in computer science.
                        </p>
                    </div>
                    <div className="skill-info">
                        <h1>What I know</h1>
                        <ul> 
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SASS, SCSS</li>
                            <li>Javascript</li>
                            <li>ReactJS</li>
                            <li>Jquery</li>
                            <li>PHP</li>
                            <li>Ruby</li>
                            <li>C++</li>
                        </ul>
                    </div>
                </div>
            </section>
        ]
    }
}