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
    
    // A convoluted method to filter out the current user's plots
    // The original filter wasn't working with plot objects, so
    // I have done it with plot Ids and the used findById to populate
    // new array "otherPlots".
    const userPlotIds = currentUserPlots.map((plot) => plot.id);
    const allPlotIds = plots.map((plot) => plot.id);
    const otherPlotIds = allPlotIds.filter((id) => (userPlotIds.indexOf(id) === -1) );
    const findPlotById = function(id){
        return plots.find((plot) => (plot.id === id));
    } 
    let otherPlots = [];
    for(let id of otherPlotIds){
        otherPlots.push(findPlotById(id));
    }

    // The two algorithms below did not work.

    // 1) const otherPlots = plots.filter((plot) => (currentUserPlots.indexOf(plot) === -1));
    
    // 2) let otherPlots = [];
    //  for(let plot of plots){
    //      if (currentUserPlots.indexOf(plot) > -1){
    //          otherPlots.push(plot);
    //      }
    //  }


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

    const userPlotLength = currentUserPlotArray.length
    const plotsStatement = userPlotLength > 0 ? 'Other Plots:' : 'All Plots:'
    const idSet = userPlotLength > 0 ? 'other-plots-grid' : 'your-plots-grid';

    return(
        <>
        <div id="plots-grid-container">

            <div id="logo-grid">
                <img  class="logo2" src={LogoSmall} alt="LogoSmall" />
            </div>

            {/* <h3>Adding history to your plot is optional. </h3> */}

            {userPlotLength > 0 ?
            <div id="your-plots-grid">
                <p class="plotText2">Your Plot{plotsPlural? <span>s</span>: null}:</p>
        
                <div>
                    <ul class="flexWrapper">
                        {currentUserPlotArray}
                    </ul>
                </div>
            </div>
            :null}

            <div id={idSet}>
                <p class="plotText2">{plotsStatement}</p>

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