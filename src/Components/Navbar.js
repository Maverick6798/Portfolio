import React, {useState} from 'react'

const Navbar = () => {
    const [colorChange, setColorChange] =useState(false)
    
    const [toggle, setToggle] =useState(false)

    const changeNavBarcolor = () => {
        (window.scrollY >= 1) ? setColorChange(true) : setColorChange(false)
    }
    const toggleChange = () => {
       setToggle(!toggle)
    }
    window.addEventListener('scroll',changeNavBarcolor)
    return(
        <div className={colorChange ? "Navbar scroll": "Navbar"}>
            <div className="max-width">
            <div className="logo"><a href="#">Portfo<span style={{color: colorChange? "#fff" : "crimson"}}>lio.</span></a></div>
                <ol className={toggle? "Menu active": "Menu"}>
                    <li><a className={colorChange ? "scroll1" : ""} href="#">Home</a></li>
                    <li><a className={colorChange ? "scroll1" : ""} href="#about">About</a></li>
                    <li><a className={colorChange ? "scroll1" : ""} href="#">Services</a></li>
                    <li><a className={colorChange ? "scroll1" : ""} href="#skills">Skills</a></li>
                    <li><a className={colorChange ? "scroll1" : ""} href="#">Projects</a></li>
                    <li><a className={colorChange ? "scroll1" : ""} href="#">Contact</a></li>
                </ol>
                <div className="Menu-btn">
                    <i className={toggle? "fa fa-times": "fas fa-bars"} onClick={toggleChange}></i>
                </div>

            </div>

        </div>
    )
};

export default Navbar;

/**/