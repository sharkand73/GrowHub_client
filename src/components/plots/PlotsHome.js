import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import '../../css/Plots.css';
import LogoSmall from '../../css/LogoSmall.png';
import Map from './Map';
import PlotList from './PlotList';


const PlotsHome = ({currentUser, plots}) =>{

    const [selectedPlot, setSelectedPlot] = useState(null);
    const [mapSelected, setMapSelected] = useState(true);

    if (mapSelected) {
        return (
            <>
            <button type="button" onClick={()=>{setMapSelected(false)}}>Grid View</button>
            <Map />   
            </>         
        )
        }

return(
        <>
        <div id="plots-grid-container">
        <button type="button" onClick={()=>{setMapSelected(true)}}>Map View</button>
            <PlotList currentUser={currentUser} plots={plots} selectedPlot={selectedPlot} setSelectedPlot={setSelectedPlot} />

        </div>
        </>
    )

}

export default PlotsHome