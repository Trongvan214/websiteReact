import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./css/navlink.css";

export default class NavLink extends Component {
    render(){
        return (
            <div className="nav-slide">
                <nav>
                    <ul>
                        <li key="Home" onClick={this.props.reset}><Link to="/websiteReact/">Home</Link></li>,
                        <li key="About" onClick={this.props.reset}><Link to="/websiteReact/about">About</Link></li>,
                        <li key="Skill" onClick={this.props.reset}><Link to="/websiteReact/skill">Skill</Link></li>,
                        <li key="Portfolio" onClick={this.props.reset}><Link to="/websiteReact/portfolio">Portfolio</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}