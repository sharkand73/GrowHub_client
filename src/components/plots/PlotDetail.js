import React from 'react';

const PlotDetail = ({currentUser, plot}) =>{


    return(
        <>
            <h3>This is the plot detail page</h3>
            <ul>
                <li>Plot Number: {plot.plotNumber}</li>
                <li>Dimensions: {plot.length}m x {plot.width}m</li>
                <li> {plot.isFlat ? "This plot is flat!" : "This plot is as flat as plant Earth (not flat)"}</li>
            </ul>
        </>
    )

}

export default PlotDetail;