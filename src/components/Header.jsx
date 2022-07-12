import React from 'react'
import logo from '../img/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <img src={logo} alt="Логотип" className="header__logo" />
                <h1 className="header__title">Репозитории <span>GitHub</span></h1>
            </div>
        </header>
    )
}

export default Header