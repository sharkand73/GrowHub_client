import React from 'react';
import {Link} from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = ({currentUser, setCurrentUser}) => {

    const hello = currentUser? `Hello ${currentUser.shortName}!` : null;

    const logout = () =>{
        setCurrentUser(null);
    }

    return(
        <header class="navLine">

        <div>
        {currentUser ?
        <>
                <ul class="navWrap navLine">

                    <li class="left">
                    <Link class="navItem" to="/plots">Plots</Link>
                    </li>

                    <li class="left">
                    <Link class="navItem" to="/knowhows">Knowhows</Link>
                    </li>

                    <li class="left">
                    <Link class="navItem" to="/community">Community</Link>
                    </li>

                    <li class="left">
                    <Link class="navItem" to="/">Home</Link>
                    </li>
            
                
                    <div class="navItem right navUser">
                        {currentUser ?
                        <>
                            <li>
                                <p class="slim" >{hello}</p>
                            </li>
                            <li>
                                <button class="logoutButton" onClick={() => {logout()}}>Logout </button>
                            </li>
                        </>
                        : null}
                    </div>              
                </ul>
        </> : null}
        </div>

        </header>
    )
}

export default NavBar
