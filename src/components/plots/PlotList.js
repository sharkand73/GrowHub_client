import React from 'react';
import Plot from './Plot';

const PlotList = ({currentUser, plots}) =>{

    // Renders a Plot object for each plot in plots
    const plotArray = plots.map((plot, index) => {
        return(
            <li key={index}><Plot plot={plot} currentUser={currentUser}/></li>
        )
    })

    // Takes the above array, and moves the users plot to the top
    // For each plot in the user.plot array, remove them from plots array, and add them to the start of the plots array
    // then map through each one and make an <li>

    // const foundPlots = currentUser.plots.find((plot) => plot === plots.map((plot, index) => {}))


    return(
        <>
            <h3>This is our list of plots, that renders many Plot objects</h3>
            <p> We can click on a Plot, to access PlotDetail</p>
            <ul>
                {plotArray}
            </ul>
        </>
    )

}

export default PlotList