import React from 'react';
//import {Redirect} from 'react-router-dom';

import '../../css/Plots.css';
//import LogoSmall from '../../css/LogoSmall.png';
import Plot from './Plot';

const PlotList = ({currentUser, plots, selectedPlot, setSelectedPlot}) => {

    const currentUserPlots = [];

// NEW Method that searches through plots and grabs the users plots
    plots.forEach((plot) => {
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
        <li key={index}><Plot key={index} plot={plot} plots={plots} currentUser={currentUser} setSelectedPlot={setSelectedPlot}/></li>
    )
    })

    // Renders a Plot object for each plot in otherPlots
    const otherPlotArray = otherPlots.map((plot, index) => {
        return(

            <li key={index}><Plot plot={plot} plots={plots} currentUser={currentUser} setSelectedPlot={setSelectedPlot}/></li>
            
        )
    })

    const userPlotLength = currentUserPlotArray.length
    const plotsStatement = userPlotLength > 0 ? 'Other Plots:' : 'All Plots:'
    const idSet = userPlotLength > 0 ? 'other-plots-grid' : 'your-plots-grid';


    return (
        <>
            {userPlotLength > 0 ?
            <div id="your-plots-grid">
                <p className="plotText2">Your Plot{plotsPlural? <span>s</span>: null}:</p>
        
                <div>
                    <ul className="flexWrapper">
                        {currentUserPlotArray}
                    </ul>
                </div>
            </div>
            :null}

            <div id={idSet}>
                <p className="plotText2">{plotsStatement}</p>

                <div>
                    <ul className="flexWrapper plotText3">
                        {otherPlotArray}
                    </ul>
                </div>
            </div>
            </>
    )
}

export default PlotList;