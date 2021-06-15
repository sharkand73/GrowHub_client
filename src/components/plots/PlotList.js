import React from 'react';
import Plot from './Plot';

import '../../css/Plots.css';
import LogoSmall from '../../css/LogoSmall.png';

const PlotList = ({currentUser, plots, allotmentSettings}) =>{

    // const plotsMap = allotmentSettings.mapFilepath;
    
    // const currentUserPlots = currentUser.plots; // OLD when users actually had plots brought through to front end, now IGNORED

    const currentUserPlots = [];

// NEW Method that searches through plots and grabs the users plots
    const plotsFill = plots.forEach((plot) => {
        for (let user of plot.users){
            if (user.shortName === currentUser.shortName){
                currentUserPlots.push(plot)
            }
        }
    })

    const currentUserPlotsTally = currentUserPlots.length;
    const plotsPlural = (currentUserPlotsTally > 1);
    // This filters out the above plot items from {plots}.  
    // A plot of the current user will have an index of 0,1,2, etc. in currentUserPlots.  
    // A non-plot will have indexOf returning -1, on the other hand.

    const otherPlots = plots.filter((plot) => (currentUserPlots.indexOf(plot) === -1));

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
        <div id="plots-grid-container">

            <div id="logo-grid">
                <img  class="logo2" src={LogoSmall} alt="LogoSmall" />
            </div>

            {/* <h3>Adding history to your plot is optional. </h3> */}

            <div id="your-plots-grid">
                <p class="plotText2">Your Plot{plotsPlural? <span>s</span>: null}:</p>
        
                <div>
                    <ul class="flexWrapper">
                        {currentUserPlotArray}
                    </ul>
                </div>
            </div>

            <div id="other-plots-grid">
                <p class="plotText2">Other Plots:</p>

                <div>
                    <ul class="flexWrapper">
                        {otherPlotArray}
                    </ul>
                </div>
            </div>

            {/* <p>shifted plots</p>
            <ul>
                {newPlotsArray()}
            </ul> */}

        </div>
        </>
    )

}

export default PlotList