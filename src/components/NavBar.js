import React from 'react';
import {Link} from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
    return(
        <header class="navLine">

        <ul class="navWrap navLine">

            <li class="left">
            <Link class="navItem" to="/plots">Plots</Link>
            </li>

            <li class="left">
            <Link class="navItem" to="/knowhows">Know Hows</Link>
            </li>

            <li class="left">
            <Link class="navItem" to="/community">Community</Link>
            </li>

            <li class="right">
            <Link class="navItem" to="/">Home</Link>
            </li>

        </ul>

        </header>
    )
}

export default NavBar
