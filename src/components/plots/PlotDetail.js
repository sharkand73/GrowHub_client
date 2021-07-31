import React, {useState} from 'react';
import PlotComment from './PlotComment';
import NewPlotComment from './NewPlotComment';
import {Redirect} from 'react-router-dom';


import '../../css/Plots.css';
import LogoSmall from '../../css/LogoSmall.png';

const PlotDetail = ({currentUser, plot, plots, getDate, postComment, comments}) =>{

    const [backHandler, setBackHandler] = useState(0);

    const commentsArray = [];

    comments.forEach((comment) => {
        if (comment.plot.id === plot.id){
            commentsArray.push(
                <li key={comment.index}>
                    <PlotComment key={comment.index} comment={comment}/>
                    <hr key={comment.index} />
                </li>  
            )
            }
        }
    )

    const getPlotHolders = () => {
    let plotHolders = "";
    let i = 0;
    for(let user of plot.users){
        if (i>0){plotHolders += ", "};
        plotHolders += user.shortName;
        i++;
    }
    return plotHolders;
    }

    const isMyPlot = () => {
        return (plot.users.findIndex(
            (user) => (currentUser.id === user.id)) > -1);
    }
    
    const getArea = (length, breadth) => (Math.round(length * breadth * 10) / 10);
    const plotSize = getArea(plot.length, plot.breadth);

    const plotSizes = plots.map((item) => getArea(item.length, item.breadth));

    // calculates position in plot sizes league table
    const calculateClassification = function(mySize){
    return plotSizes.filter((size) => (size > mySize)).length;
    }

    const handleBackClick= () => {
        setBackHandler(1);
    }

    const commentsArrayLength = commentsArray.length;

    return(
        <>
        <div id="plots-grid-container2">

            <div id="logo-grid">
                <img  className="logo2" src={LogoSmall} alt="LogoSmall" />
            </div>

            <div id="plot-details-grid">
            <p className="plot-detail1">Details for {plot.areaName}</p>
            <ul className="margin">
                <li className="plot-detail2" key={1}> - Plot Number: {plot.plotNumber}</li>
                <li className="plot-detail2" key={2}> - Dimensions: {plot.length}m x {plot.breadth}m</li>
                <li className="plot-detail2" key={3}> - Area: {plotSize} m&sup2;</li>
                <li className="plot-detail2" key={4}> - Classification: {calculateClassification(plotSize)}</li>
                <li className="plot-detail2" key={5}> - Inclination: {plot.isFlat ? "flat" : "slope"}</li>
                <li className="plot-detail2" key={6}> - Plot holders: {getPlotHolders()}</li>
            </ul>
            </div>

            <div id="plot-history-grid">

                {
                isMyPlot() ?
                <NewPlotComment plot={plot} getDate={getDate} currentUser={currentUser}  postComment={postComment}/>: null
                }
                {
                commentsArrayLength > 0 ?
                <>
                    <p className="plot-detail1">Plot history:</p>   
                    <ul className="plot-detail2">
                        {commentsArray}
                    </ul>  
                </> 
                : null
                }          
            </div>

            <div id="plot-details-back" className = "plot-back" onClick = {()=> handleBackClick()}>

                Back
            </div>

            {backHandler === 1 ? <Redirect to='/plots'/> : null}
        </div>  
        </>
    )

}

export default PlotDetail;