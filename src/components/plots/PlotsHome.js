import React, {useState} from 'react';

import '../../css/Plots.css';
import LogoSmall from '../../css/LogoSmall.png';
import Map from './Map';
import PlotList from './PlotList';
import PlotDetail from './PlotDetail';


const PlotsHome = ({currentUser, plots}) =>{

    const [plotIndex, setPlotIndex] = useState(-1);
    const [mapSelected, setMapSelected] = useState(true);

    const plotify = (number) => (`plot${number}`);

    const findPlotByName = function(name){
        return plots.find((plot) => (plotify(plot.plotNumber) === name));
    }

    const selectFromMap = (areaName) => {
        const plotSelected = findPlotByName(areaName);
        const indexSelected = plots.indexOf(plotSelected);
        //console.log(indexSelected);
        if (plotSelected){setPlotIndex(indexSelected)}
    }

    if (plotIndex > -1){
        return (
         <PlotDetail currentUser={currentUser} plots={plots} plotIndex={plotIndex} setPlotIndex={setPlotIndex} mapSelected={mapSelected} />    
        )
    }

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
            <PlotList currentUser={currentUser} plots={plots} plotIndex={plotIndex} setPlotIndex={setPlotIndex} />

        </div>
        </>
    )

}

export default PlotsHome