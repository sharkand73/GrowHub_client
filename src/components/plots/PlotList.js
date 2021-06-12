import React from 'react';
import Plot from './Plot';

const PlotList = ({currentUser, plots}) =>{

    // Renders a Plot object for each plot in plots
    const plotArray = plots.map((plot, index) => {
        return(
            <li key={index}><Plot plot={plot} currentUser={currentUser}/></li>
        )
    })

    const userPlots = currentUser.plots.map((plot, index) => {
        return(
            <li key={index}><Plot plot={plot} currentUser={currentUser}/></li>
        )
    })

    return(
        <>
            <h3>This is our list of plots, that renders many Plot objects</h3>

            <p>Your Plot(s):</p>
            <ul>
                {userPlots}
            </ul>

            <p>All Plots</p>
            <ul>
                {plotArray}
            </ul>
        </>
    )

}

export default PlotList