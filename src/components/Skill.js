import React, {Component} from 'react';
import './css/Skill.css';

export default class Skill extends Component {
    render(){
        return (
            <section id="skill" key="content">
                <h1>Skills</h1>
                <div className="skill-info">
                    <div className="skill-wrapper">
                        <h1>What I know</h1>
                        <ul> 
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>CSS preprocessor</li>
                            <li>Javascript</li>
                            <li>ReactJS</li>
                            <li>C++</li>
                        </ul>
                    </div>
                    <div className="skill-wrapper">
                        <h1>Work with</h1>
                        <ul> 
                            <li>Jquery</li>
                            <li>PHP</li>
                            <li>Ruby</li>
                            <li>Haskell</li>
                            <li>Prolog</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}