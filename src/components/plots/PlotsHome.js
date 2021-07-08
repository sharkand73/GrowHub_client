import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import '../../css/Plots.css';
import LogoSmall from '../../css/LogoSmall.png';
import Map from './Map';
import PlotList from './PlotList';


const PlotsHome = ({currentUser, plots}) =>{

    const [selectedPlot, setSelectedPlot] = useState(null);
    const [mapSelected, setMapSelected] = useState(true);

    const plotify = (number) => (`plot${number}`);

    const findPlotByName = function(name){
        return plots.find((plot) => (plotify(plot.plotNumber) === name));
    }

    const selectFromMap = (areaName) => {
        const plotSelected = findPlotByName(areaName);
        if (plotSelected){setSelectedPlot(plotSelected)}
    }

    if (selectedPlot){
        const url = "/plots/" + selectedPlot.id;
        return <Redirect to={url} />}    

    if (mapSelected) {
        return (
            <>
            <div id="logo-grid">
                <img  className="logo2" src={LogoSmall} alt="LogoSmall" />
                <button type="button" onClick={()=>{setMapSelected(false)}}>Grid View</button>
            </div>
            
            <Map selectFromMap={selectFromMap}/>   
            </>         
        )
        }

return(
        <>
        <div id="logo-grid">
            <img  className="logo2" src={LogoSmall} alt="LogoSmall" />
            <button type="button" onClick={()=>{setMapSelected(true)}}>Map View</button>
        </div>
        <div id="plots-grid-container">
            <PlotList currentUser={currentUser} plots={plots} selectedPlot={selectedPlot} setSelectedPlot={setSelectedPlot} />

        </div>
        </>
    )

}

export default PlotsHome