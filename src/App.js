import './App.css';
import React, {useState, useEffect} from 'react';
import MainContainer from './containers/MainContainer';
import Request from './helpers/request';


function App() {

  const [allotmentSettings, setAllotmentSettings] = useState({});

  const requestSettings = function(){
    const request = new Request();

    request.get('/api/allotmentsettings')
    .then(data => {setAllotmentSettings(data[0])});
  }
  
  useEffect(()=>{requestSettings()}, []);


  return (
    <>
    <MainContainer allotmentSettings={allotmentSettings}/>
    </>
  );
}

export default App;
