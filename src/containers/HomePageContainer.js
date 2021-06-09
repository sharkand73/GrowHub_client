import React from 'react';


// Renders weather widgets etc
// Renders buttons for areas of the site
// Renders some recent news bulletins (requires loop, find most recent, or something)
// Renders tip of the month
// Renders "hello {user}"


// Props to pass down:
    // Plots = Plots & User
    // KnowHows = KnowsHows & User
    // Community = Bulletins, Jobs, User

const HomePageContainer = () =>{

    return(
        <>
        <h1>This is our home page container</h1>
        <p>Depending what button we click, this container will render our choice, be it PlotList or whatevz </p>
        </>
    )

}

export default HomePageContainer;