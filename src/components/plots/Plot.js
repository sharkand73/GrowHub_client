import React from 'react';
import {Link} from 'react-router-dom'

import '../../css/Plots.css';

// Props Incoming:
    // Takes in a plot prop


// Will return an li element with plot name, plot picture, whatever we add down the line

// will need to link to the plot detail page with an onclick

const Plot = ({plot, currentUser}) =>{

    const url = "/plots/" + plot.id;

    return(
        <div >
        <Link  to={url} >
            <button class="plotSpacing">
                <h4 class="plotText"> {plot.areaName} </h4>
            </button>
        </Link>
        </div>
    )

}

export default Plot;