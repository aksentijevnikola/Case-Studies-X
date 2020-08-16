import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.style.scss';
import {CardsContext} from '../../context/Context'



const Navbar = () => {
    const {setToggleForm} = useContext(CardsContext)
    return (
        <div className='navbar-brainster'>
            <div className="navbar-wrapper">
                <Link to='/' className='navbar-logo'>
                    <img src="/img/brainster_space_logo.svg" alt="" />
                </Link>
                <div className='navbar-nav'>
                    <aside className='nav-link'>Академии</aside>
                    <aside className='nav-link'>Вебинари</aside>
                    <aside className='nav-link'>Тест за кариера</aside>
                    <aside className='nav-link'>Блог</aside>
                    <button className='join-btn' onClick={() => setToggleForm(true)}>Пријави се</button>
                    <div className="openBtn">
                        <span className="bar bar-1 bar-1-x"></span>
                        <span className="bar bar-2 bar-2-x"></span>
                        <span className="bar bar-3 bar-3-x"></span>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Navbar;