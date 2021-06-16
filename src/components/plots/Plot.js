import React from 'react';
import '../../css/Plots.css';

const Plot = ({plot, setSelectedPlot}) =>{

    return(
        <div class="flexPlots">
            <div class="no-decoration">
                <button class="plotSpacing" onClick = {() => setSelectedPlot(plot)}>

                    <p class="plotText"> {plot.areaName} </p>

                </button>
            </div>
        </div>
    )

}

export default Plot;