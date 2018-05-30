import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './css/Navhamburger.css';
import './css/Navlink.css';
import './css/Navbar.css';

export default class Navbar extends Component {
    state = {active: false};
    toggleMenu(e){
        e.stopPropagation();
        this.setState(prevState => {
           return {active: !prevState.active};
        });
    }
    reset(){
        this.setState(prevState => {
            return {active: false};
        })
    }
    render(){
       return (
            <div id="menu" className={this.state.active?"active":""}>
                <NavHamburger onClick={(e)=>this.toggleMenu(e)}/>
                {/* <div className="media-button">
                    <Link to="https://github.com/Trongvan214" target="_blank" >Testing</Link>
                </div> */}
                <NavLink reset={()=>this.reset()}/>
            </div>
       )
    }
}

class NavHamburger extends Component {
    render(){
        return (
            <div className="toggle-button" onClick={this.props.onClick}>
                <div className="toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}

class NavLink extends Component {
    render(){
        return (
            <div className="nav-slide">
                <nav>
                    <ul>
                        <li key="Home" onClick={this.props.reset}><Link to="/">Home</Link></li>,
                        <li key="About" onClick={this.props.reset}><Link to="/about">About</Link></li>,
                        <li key="Skill" onClick={this.props.reset}><Link to="/skill">Skills</Link></li>,
                        <li key="Portfolio" onClick={this.props.reset}><Link to="/portfolio">Portfolio</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}