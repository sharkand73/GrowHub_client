import React from 'react';

// Props Incoming:
    // knowHows & user

// Props Outgoing:
    // KnowHow - knowHow, user

// Functions:
    // Map through all the prop knowHows and render a KnowHow, passing in the knowHow object

// Purpose:
    // Render a list of all KnowHows
    // Allow us in the future to then click on a KnowHow to edit etc
    // Also renders the form for a NewKnowHow

const KnowHowList = () =>{

    return(
        <>
            <h3>This will be our KnowHowList</h3>
            <p> And a button for a 'Add your knowHow!'</p>

        </>
    )
}

export default KnowHowList;