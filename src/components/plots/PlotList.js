import React from 'react';
import Plot from './Plot';

const PlotList = ({currentUser, plots}) =>{

    // Current user's plots. ***There is currently an issue with this at the back end!***
    const currentUserPlots = currentUser.plots;
    const currentUserPlotsTally = currentUserPlots.length;
    const plotsPlural = (currentUserPlotsTally > 1);
    // This filters out the above plot items from {plots}.  
    // A plot of the current user will have an index of 0,1,2, etc. in currentUserPlots.  
    // A non-plot will have indexOf returning -1, on the other hand.

    const otherPlots = plots.filter((plot) => (currentUserPlots.indexOf(Plot) === -1));

    // Renders a Plot object for current user plot
    const currentUserPlotArray = currentUserPlots.map((plot, index) => {
    return(
        <li key={index}><Plot plot={plot} currentUser={currentUser}/></li>
    )
})

    // Renders a Plot object for each plot in otherPlots
    const otherPlotArray = otherPlots.map((plot, index) => {
        return(
            <li key={index + currentUserPlotsTally}><Plot plot={plot} currentUser={currentUser}/></li>
        )
    })

    // const userPlots = currentUser.plots.map((plot, index) => {
    //     return(
    //         <li key={index}><Plot plot={plot} currentUser={currentUser}/></li>
    //     )
    // })


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

            <p>Your Plot{plotsPlural? <span>s</span>: null}:</p>
            <ul>
                {currentUserPlotArray}
            </ul>

            <p>Other Plots:</p>
            <ul>
                {otherPlotArray}
            </ul>

            {/* <p>shifted plots</p>
            <ul>
                {newPlotsArray()}
            </ul> */}
        </>
    )

}

export default PlotList