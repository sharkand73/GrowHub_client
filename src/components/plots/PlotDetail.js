import React from 'react';
import PlotComment from './PlotComment';

const PlotDetail = ({currentUser, plot}) =>{

    const getPlotHolders = () => {
    let plotHolders = "";
    let i = 0;
    for(let user of plot.users){
        if (i>0){plotHolders += ", "};
        plotHolders += user.shortName;
        i++;
    }
    return plotHolders;
    }

    const plotComments = plot.comments.map((comment, index) => (<li><PlotComment key={index} comment={comment} currentUser={currentUser}/></li>))

    return(
        <>
            <h3>Details for {plot.areaName}</h3>
            <ul>
                <li>Plot Number: {plot.plotNumber}</li>
                <li>Dimensions: {plot.length}m x {plot.breadth}m</li>
                <li>Inclination: {plot.isFlat ? "flat" : "slope"}</li>
                <li>Plotholders: {getPlotHolders()}</li>
            </ul>
            <h3>Plot history:</h3>
            {plot.comments?<ul>{plotComments}</ul>: null}
            
        </>
    )

}

export default PlotDetail;