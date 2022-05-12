import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { Button } from "../Button"

//const element = <FontAwesomeIcon icon={faGhost} />
//ReactDOM.render(element, document.body)

class Navbar extends Component {
    state = { clicked: false } 

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className = 'NavbarItems'>
                <h1 className = 'navbar-logo'>PH4NT0M</h1>
                <div className = 'menu-icon' onClick = {this.handleClick}>
                    <i className= {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key = {index}>
                                <a className = {item.className} href = {item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar

/*
<FontAwesomeIcon icon="fa-solid fa-ghost" />
    //<FontAwesomeIcon icon={faGhost} />

                    <Button>Contact Me</Button>


*/