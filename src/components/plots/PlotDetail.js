import React from 'react';

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

    console.log(plot.areaName);
    console.log(plot.users);

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
            <p>Inserts plot comments here</p>
        </>
    )

}

export default PlotDetail;