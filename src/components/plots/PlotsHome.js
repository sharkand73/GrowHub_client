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
            <div id="logo-grid">
                <img  class="logo2" src={LogoSmall} alt="LogoSmall" />
                <button type="button" onClick={()=>{setMapSelected(false)}}>Grid View</button>
            </div>
            
            <Map />   
            </>         
        )
        }

return(
        <>
        <div id="logo-grid">
            <img  class="logo2" src={LogoSmall} alt="LogoSmall" />
            <button type="button" onClick={()=>{setMapSelected(true)}}>Map View</button>
        </div>
        <div id="plots-grid-container">
            <PlotList currentUser={currentUser} plots={plots} selectedPlot={selectedPlot} setSelectedPlot={setSelectedPlot} />

        </div>
        </>
    )

}

export default PlotsHome