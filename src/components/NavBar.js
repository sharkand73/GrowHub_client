import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({currentUser, setCurrentUser}) => {

    const hello = currentUser? `Hello ${currentUser.shortName}!` : null;

    const logout = () =>{
        setCurrentUser(null);
    }

    return(
        <header>

        <ul>

            <li className="navBarItem">
            <Link to="/">Home</Link>
            </li>

            <li className="navBarItem">
            <Link to="/plots">Plots</Link>
            </li>

            <li className="navBarItem">
            <Link to="/knowhows">Know Hows</Link>
            </li>

            <li className="navBarItem">
            <Link to="/community">Community</Link>
            </li>
            
            {currentUser ?
            <>
                <li>
                    <p>{hello}</p>
                </li>
                <li>
                    <button onClick={() => {logout()}}>Logout </button>
                </li>
            </>
            : null}

        </ul>
        

        </header>
    )
}

export default NavBar
