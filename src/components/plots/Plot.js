import React from 'react';
import '../../css/Plots.css';

const Plot = ({plot, setSelectedPlot}) =>{

    return(
        <div className="flexPlots">
            <div className="no-decoration">
                <button className="plotSpacing" onClick = {() => setSelectedPlot(plot)}>

                    <p className="plotText"> {plot.areaName} </p>

                </button>
            </div>
        </div>
    )

}

export default Plot;