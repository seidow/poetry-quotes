import React from "react";
import logo from '../images/logo.png'

const Header = () => {
    return (
        <header className="py-4 px-6 text-2xl md:text-4l lg:text-6xl w-full text-center font-medium">
            <img className="logo" src={logo} alt="logo" />
            <h1>اقتباسات من الأدب العربي</h1>
        </header>
    )
}

export default Header;