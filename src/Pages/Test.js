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
import styled from "styled-components"


const Div= styled.div`
    overflow:scroll;
    width:900px;
    height:500px;
    font-size:2.5rem;
    background-color:blue;
    color:white;
    text-align:left;
    margin:20px auto;
`
function Test() {


 
  
  return (
    <Div styled={{backgroundColor:"green"}}>
        <div style={{marginLeft:"1rem"} }>Hallo Michael Strater, Ich hoffe Sie werden einen Tag dieses Nachricht Sehen. Ihn dienst nur zum Testen des Routings und Klappenheit zur diese React-Anwendung, Vielen Dank für Die Gelegenheit bei Ihnen eine Arbeitsaubildung mitzumachen. Danke und ich freut mich sehr bei Ihnen Programmieren zu lernen. Und auch es tut mir Leid, weil ich habe Sehr Spät zuruck melden, ich habe dir zu spät zuruckmelden, weil bis wann ich eine Nachricthen zu dir geschick habe, hatte ich niemals irgendedetwas meine Anwendungen gehostet. Deshalb hatte ich ein gefuhl, dass ich dir nicht nur links zu "source codes auf github" schicken soll. Aber leider, habe ich viele Fehler eingetreten als ich versuche einige meine Anwendung zuhosten, aber nach viele versuchungen und neu dingen lernen heute endlich habe ich Glück und sie haben functioniert, ich hoffe es noch ein Arbeitaubildungplatz bei Ihnen gibt, weil ich gröss Leidenschäft und Interesse Programmieren zulernen und meine Anwendungenwicklungfahigkeit zu verbessern gibt. Ich hoffe, ich kann eine Chance zur Arbeitsaubildung bei Ihen mitmachen, weil ich weisse, es gibt noch sehr viel zulernen und ich glaube ich werde bei Ihnen viel lernen und Anwendungenwicklungerfahren sammeln. Danke und Tshuss, Ich freut mich sehr bei Ihre zuruck meldung and muss ich noch mich Entschuldigen, für eine sehr sehr spät zuruckmeldung  </div>
     </Div>
    );
}
export default Test