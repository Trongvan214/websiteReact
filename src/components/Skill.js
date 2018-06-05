import React, {Component} from 'react';
import './css/Skill.css';
import skillBg from '../images/book.jpeg';

export default class Skill extends Component {
    render(){
        const background = {
            "background": `url(${skillBg}) center center/ cover no-repeat`
        }
        return (
            <section style={background} id="skill" key="content">
                <h1>Skills</h1>
                <div className="skill-info">
                    <div className="skill-wrapper">
                        <h1>What I know</h1>
                        <ul> 
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>CSS preprocessor</li>
                            <li>Javascript</li>
                            <li>JQuery</li>
                            <li>NodeJS, ReactJS</li>
                            <li>C++</li>
                        </ul>
                    </div>
                    <div className="skill-wrapper">
                        <h1>Work with</h1>
                        <ul> 
                            <li>PHP</li>
                            <li>Ruby</li>
                            <li>Haskell</li>
                            <li>Prolog</li>
                            <li>SQL</li>
                            <li>Rest/Restful services</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}