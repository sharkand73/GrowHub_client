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


    // This array would (should) return a single array with the users plots first
    // const newPlotsArray = () => {
    //     for (let userPlot in userPlots){
    //         for (let plot in plots){
    //             if (plot === userPlot){
    //                 plots.remove(plot);
    //                 plot.unshift(plot);
    //             }
    //         }
    //     }
    //     return plotArray
    // }

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

            {/* <p>shifted plots</p>
            <ul>
                {newPlotsArray()}
            </ul> */}
        </>
    )

}

export default PlotList