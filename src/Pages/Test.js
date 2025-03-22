/*

// import mapboxgl from '!mapbox-gl';  eslint import/no-webpack-loader-syntax: off 
// import 'mapbox-gl/dist/mapbox-gl.css';

// mapboxgl.accessToken = 'pk.eyJ1IjoieWVnb24ta2lwcm90aWNoIiwiYSI6ImNsNDgycGRmNjA4bWczY3IybGhicHo0dWkifQ.K5cxQAy5pTaE6km6uKJgqw';


const Div= styled.div`
    width:200px;
    height:200px;
    font-size:4rem;
    background-color:blue;
    color:white;
    text-align:center;
    margin:200px auto;
    `
function Test() {


  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(39.658871);
  const [lat, setLat] = useState(-4.043740);
  const [zoom, setZoom] = useState(9);

  map.current=new mapboxgl.NavigationControl();
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div styled={{backgroundColor:"green"}}>
      <div ref={mapContainer} className="map-container" />
    </div>
    );
}

*/

import React,{useRef, useState, useEffect} from 'react'
import styled from '@emotion/styled'


const Div= styled.div`
    overflow:scroll;
    width:95%;
    height:90%;
    font-size:2.5rem;
    background-color:blue;
    color:white;
    text-align:left;
    border-radius:20px;
    // margin:20px auto;
`
function Test() {

  
  return (
    <Div styled={{backgroundColor:"green"}}>
        <div style={{marginLeft:"1rem"} }>Work still in progress, therefore if you land on this page, just know that this is just for testing of the routing of the application purposes, when ready you will have all the time to test our products EasyClicks PMS software to your satisfaction, kindly bare with us as we work to complete this project, Thanks You.             Work still in progress, therefore if you land on this page, just know that this is just for testing of the routing of the application purposes, when ready you will have all the time to test our products EasyClicks PMS software to your satisfaction, kindly bare with us as we work to complete this project, Thanks You.   </div>
     </Div>
    );
}


export default Test