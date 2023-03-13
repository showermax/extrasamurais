import React from 'react';
import logo from '../images/react-icon-small.png'

type NavbarPorpsType = {
    darkMode: boolean
    toggleDarkMode: (isDark: boolean) => void
}

const Navbar = (props: NavbarPorpsType) => {
    return (
        <nav className={props.darkMode ? "dark": ""}>
            <img className="nav--logo_icon" src={logo}/>
            <h3 className="nav--logo_text">ReactFacts</h3>

            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={()=>props.toggleDarkMode(!props.darkMode)}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>

            </div>
        </nav>
    );
};

export default Navbar;