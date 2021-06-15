import React from 'react';
import PlotComment from './PlotComment';

const PlotDetail = ({currentUser, plot, plots}) =>{

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
    const getArea = (length, breadth) => (Math.round(length * breadth * 10) / 10);
    const plotSize = getArea(plot.length, plot.breadth);

    // const plotSizes = plots.map((item) => getArea(item.length, item.breadth));

    // calculates position in plot sizes league table
    // const calculatePlotSizeIndex = function(mySize){
    // return plotSizes.count((size) => (size > mySize))
    // }


    return(
        <>
            <h3>Details for {plot.areaName}</h3>
            <ul>
                <li>Plot Number: {plot.plotNumber}</li>
                <li>Dimensions: {plot.length}m x {plot.breadth}m</li>
                <li>Area: {plotSize} m&sup2;</li>
                {/* <li>Numer of plots bigger than this: {calculatePlotSizeIndex(plotSize)}</li> */}
                <li>Inclination: {plot.isFlat ? "flat" : "slope"}</li>
                <li>Plotholders: {getPlotHolders()}</li>
            </ul>
            <h3>Plot history:</h3>
            {plot.comments?<ul>{plotComments}</ul>: null}
            
        </>
    )

}

export default PlotDetail;