import React from 'react';
import {Link} from 'react-router-dom'

import '../../css/Plots.css';

const Plot = ({plot}) =>{

    const url = "/plots/" + plot.id;

    return(
        <div class="flexPlots">
        <Link class="no-decoration" to={url} >
            <button class="plotSpacing">

                <p class="plotText"> {plot.areaName} </p>

            </button>
        </Link>
        </div>
    )

}

export default Plot;