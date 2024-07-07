import axios from 'axios';
import { getAccessToken, getRefreshToken, setTokens, clearTokens } from './tokenutils';


import api from "./axiosconfig"

const propapis="/properties/list-property"



const createProperty= (propertyname,totalunits,availableunits)=>{
    console.log(`here is the propertyname,totalunits,availableunits from apicalls.js File ${propertyname}`)
    console.log(`here is the propertyname,totalunits,availableunits from apicalls.js File ${totalunits}`)
    console.log(`here is the propertyname,totalunits,availableunits from apicalls.js File ${availableunits}`)

    console.log(api)
;    


    return api.post( propapis + "/createproperty", {propertyname,totalunits,availableunits})
    .then(
        (response)=>{
            console.log("response from LandlordCreate from the Property Tables file")
            console.log(response.data);

    })

}





const createLandlord= (landlordname,landlordemail,landlordphonenumber)=>{
    console.log(`here is the landlordname,landlordemail,landlordphonenumber from apicalls.js File ${landlordname,landlordemail,landlordphonenumber}`)
    
    return api.post(propapis + "/landlordstep", {landlordname,landlordemail,landlordphonenumber})
    .then(
        (response)=>{
            console.log("response from LandlordCreate from the Property Tables file")
            console.log(response.data);

    })

}


export{
    createLandlord,
    createProperty
}