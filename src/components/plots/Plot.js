import React from 'react';
import '../../css/Plots.css';

const Plot = ({plot, plots, setPlotIndex}) =>{

    return(
        <div className="flexPlots">
            <div className="no-decoration">
                <button className="plotSpacing" onClick = {() => setPlotIndex(plots.indexOf(plot))}>

                    <p className="plotText"> {plot.areaName} </p>

                </button>
            </div>
        </div>
    )

}

export default Plot;