import React from 'react';
import {Link} from 'react-router-dom'

import '../../css/Plots.css';

const Plot = ({plot, plots, setSelectedPlot}) =>{

    const url = "/plots/" + plot.id;

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