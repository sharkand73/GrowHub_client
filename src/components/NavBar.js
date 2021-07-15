import React from 'react';
import {Link} from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = ({currentUser, setCurrentUser}) => {

    const hello = currentUser? `Hello ${currentUser.shortName}!` : null;

    const logout = () =>{
        setCurrentUser(null);
    }

    return(
        <header className="navLine">

        <div>
        {currentUser ?
        <>
                <ul className="navWrap navLine">

                    <li className="left">
                    <Link className="navItem" to="/plots">Plots</Link>
                    </li>

                    <li className="left">
                    <Link className="navItem" to="/knowhows">Knowhows</Link>
                    </li>

                    <li className="left">
                    <Link className="navItem" to="/community">Community</Link>
                    </li>

                    <li className="left">
                    <Link className="navItem" to="/">Home</Link>
                    </li>
            
                
                    <div className="navItem right navUser">
                        {currentUser ?
                        <>
                            <li>
                                <p className="slim" >{hello}</p>
                            </li>
                            <li>
                                <button className="logoutButton" onClick={() => {logout()}}>Logout </button>
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
