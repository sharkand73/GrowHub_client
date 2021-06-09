import React from 'react';


// Responsible for States and RequestAlls from DB
// Renders HomePageContainer once user is logged in

// Props passed down: all, to HomePageContainer (pass 1 user, the logged in user)

const MainContainer = () =>{
    return(
        <>
            <h1>This will initially show a Login</h1>
            <h3> Then will show our HomePageContainer</h3>
        </>
    )

}

export default MainContainer;