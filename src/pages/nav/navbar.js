import React, {Component} from 'react';
import NavHamburger from './navhamburger'
import NavLink from './navlink';
import './css/navbar.css';

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