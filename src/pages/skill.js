import React, {Component} from 'react';
import Navbar from './nav/navbar';
import './skill.css';

export default class Skill extends Component {
    render(){
        return [
            <Navbar key="nav"/>,
            <section id="skill" key="content">
                <div className="skill-info">
                        <h1>Knowledge</h1>
                        <ul> 
                            <li>HTML5</li>
                            <li>CSS3, Bootstrap</li>
                            <li>CSS preprocessor (SASS, SCSS)</li>
                            <li>Javascript (es6, es7)</li>
                            <li>ReactJS, Jquery</li>
                            <li>PHP(little)</li>
                            <li>Ruby(little)</li>
                            <li>C++</li>
                        </ul>
                </div>
            </section>
        ]
    }
}