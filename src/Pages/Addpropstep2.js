import React, {useState, useContext,useRef, useEffect} from 'react'
// import {BrowserRouter as Router, Routes,Route, Link, Outlet, NavLink} from "react-router-dom"
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom"

import styled from "styled-components"
import {Sharesidebar} from "../components/Sidebar"
import Form from "react-validation/build/form"
// import CheckButton from "react-validation/build/button"
// import {Fake} from "./Fake"


const Breadcrumbs=styled.div`
position:fixed;
top:67px;
text-align:center;
display:flex;
align-items:center;
// vertical-align:middle;
height:45px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
left:${({sidebar})=> sidebar ? "5.5%": "23.5%"};
width:${({sidebar})=> sidebar ? "92.5%": "74.5%"};
`
const Crumbsicons=styled.div`
margin-left:2rem;
`
const Listpropdiv=styled.div`
position:fixed;
top:116px;
height:78vh;
overflow-y:scroll;
overflow-x:hidden;
left:${({sidebar})=> sidebar ? "6%": "24%"};
width:${({sidebar})=> sidebar ? "93%": "75%"};


::-webkit-scrollbar {
  width: 10px;               /* width of the entire scrollbar */
  height:7.5px;
}

::-webkit-scrollbar-track {
  background-color: #F5F5F5;        /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: gray;    /* color of the scroll thumb */
  // border-radius: 20px;       /* roundness of the scroll thumb */
  // border: 1px solid orange;  /* creates padding around scroll thumb */
}
::-webkit-scrollbar-corner {
  background-color: #F8F8F8;    /* color of the scroll thumb */
  // border-radius: 20px;       /* roundness of the scroll thumb */
  // border: 1px solid orange;  /* creates padding around scroll thumb */

`
const ListHeader=styled.div`
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
width:100%;
padding:0.5rem;
margin:0 auto;
`

const Headertitle=styled.div`
width:90%;
margin:0 auto;
font-size:${({sidebar})=> sidebar ? "1.7rem": "1.7rem" };
font-weight:${({sidebar})=> sidebar ? "600": "600" };
`
const Labelpara=styled.div`

`
const Progressbar =styled.div`
background-color:#F5F5F5;
height:10px;
border-radius:3px;
width:${({sidebar})=> sidebar ? "50%": "60%" };
margin:1rem auto;
`

const Listbody=styled.div `
margin:auto;
width:100%;
`

const Backbutton=styled(Link)`
background-color:#F5F5F5;
text-decoration:none;
font-weight:${({sidebar})=> sidebar ? "600": "600" };
font-size:${({sidebar})=> sidebar ? "1.2rem": "1.2rem" };
margin:1rem 30% 1rem 2rem;  
border-radius:6.79px;
border:none;
padding:${({sidebar})=> sidebar ? "0.5rem": "0.5rem" };
color:blue;
&:hover{
  cursor:pointer;
  padding:0.5rem;
  color:white;
  background-color:blue;
}

`
const Nextbutton=styled(Link)`
text-decoration:none;
padding:0.5rem;
background-color:${({disabled})=> disabled ? "#F5F5F5": "blue" };
font-weight:${({sidebar})=> sidebar ? "600": "600" };
font-size:${({sidebar})=> sidebar ? "1.2rem": "1.2rem" };
color:${({disabled})=> disabled ? "blue": "white" };
margin:1rem;
border-radius:6px;
border:none;
&:hover{
  padding:0.55rem;
  cursor:pointer;
}

`

const Propertycontainer=styled.div`
max-width:350px;
margin:0 auto;

`
const Listingpurposediv=styled.div`

 
`
const Label=styled.div`
 font-weight:800;

`
const Lstpurp =styled(Link)`
box-sizing:border-box;
text-decoration:none;
flex-wrap:wrap;
color:black;
margin:1rem;
display:block;
font-weight:600;
width:100%;
background-color:${({color, number})=>(color===number) ? "orange": "#F8F8F8" };
border:3px solid white;
padding:1rem 1rem;

:hover{
border:3px solid blue;  
}

`

function Addpropstep2 (){

  const chosen=JSON.parse(localStorage.getItem("listingpurpose"))
  // console.log(chosen)
  let selected="";

  if(chosen===null){

     selected="";
  }
  else{
     selected=chosen.saved.number;
  }

 

    const side=useContext(Sharesidebar);
    const form=useRef();
    // const checkbtn=useRef();
    const [color, setColor]=useState(selected);
    const [lstpurp, setLstpurp]=useState(false);
    const [disabled, setDisabled]=useState(true)
    const [path, setPath]=useState("#");



  useEffect(()=>{

    if (selected!==""){

      setDisabled(false);
      setPath("/properties/list-property/step3");

    }
  },[])

    useEffect(()=>{
      console.log(lstpurp);
      console.log(color)
    }, [lstpurp, color])

  const bgColorChange =(value)=>{
    setColor(value);
    setDisabled(false)
    setPath("/properties/list-property/step3");

  }

  const alllinks=[
    {
      value:"rent",
      label:"Rent",
      
    },
    
    
    {
      value: "sale",
      label:"Sale"

    },

    {
      value:"lease",
      label:"Lease"

    },
  ];

  const saveDraft=()=>{
    if(!disabled){
      const saved={
        "prop":lstpurp,
        "number":color,
      }
        
      localStorage.setItem("listingpurpose", JSON.stringify({saved}))
    
      console.log("Die zweite Tretet ist funktioneiren, es ist fur Liste Zweck ")
      console.log(JSON.parse(localStorage.getItem("listingpurpose")))       
    }
} 


    return (
      <div>
        <Breadcrumbs sidebar={side?1:0}>
            <Crumbsicons sidebar={side?1:0}>Icons will go here</Crumbsicons>
          </Breadcrumbs>

        <Listpropdiv  sidebar={side? 1:0} >

            <ListHeader sidebar={side?1:0}>
                <Headertitle sidebar={side?1:0}>List new property</Headertitle>
            </ListHeader>
           
            <Listbody  sidebar={side? 1:0}>
                  <Progressbar sidebar={side?1:0}></Progressbar>
                
                  <Propertycontainer>

                      <Form method="" ref={form} >           
                          <Listingpurposediv >

                            <Label>Purpose of Listing :</ Label>
                            <Labelpara>What is your goal for Listing your Property here?</Labelpara>

                              {alllinks.map((link, index)=>{
                              
                              return(
                                <Lstpurp  color={color} number={index} onClick={()=>{setLstpurp(link.value); bgColorChange(index)} } to="#"  key={index}>{link.label}</Lstpurp>    
                              )})} 
                          </Listingpurposediv>
                          
                          <div style={{ width:"100%", margin:"2rem 0rem 2rem 1rem"}}>
                            <Backbutton to="/properties/list-property/step1" sidebar={side? 1:0}>Back</Backbutton>  
                            <Nextbutton to={path}  onClick={saveDraft} disabled={disabled? 1:0}>Next Step</Nextbutton> 
                          </div>
                      </Form>  
                  </Propertycontainer>                      
            </Listbody>
        </Listpropdiv>    
      </div>
    )
}

export default Addpropstep2