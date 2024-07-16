import axios from 'axios';
import { getAccessToken, getRefreshToken, setTokens, clearTokens } from './tokenutils';


import api from "./axiosconfig"

const propapis="/properties/list-property"



const createProperty= async (propertyname,totalunits,availableunits)=>{
    console.log(`here is the propertyname,totalunits,availableunits from apicalls.js File ${propertyname}`)
    console.log(`here is the propertyname,totalunits,availableunits from apicalls.js File ${totalunits}`)
    console.log(`here is the propertyname,totalunits,availableunits from apicalls.js File ${availableunits}`)

    console.log(api)
    try {
        const response=await api.post( propapis + "/createproperty", {propertyname,totalunits,availableunits});

        // .then(
        //     (response)=>{
        //         console.log("response from LandlordCreate from the Property Tables file")
        //         console.log(response.data);
    
        // })
        console.log(response.data.propertyid);


        localStorage.setItem("propertyId", JSON.stringify(response.data.propertyid))

        console.log(JSON.parse(localStorage.getItem("propertyId")))
        
        return response;
    }
    catch(err){
        console.log(err);
        console.log("error in the catch err" + err)
    }

    // return

}





const createLandlord= async (landlordname,landlordemail,landlordphonenumber)=>{
    console.log(`here is the landlordname,landlordemail,landlordphonenumber from apicalls.js File ${landlordname,landlordemail,landlordphonenumber}`)
    
    const propertyId=JSON.parse(localStorage.getItem("propertyId"));
    console.log("Here is the property Id before I create a landlord " + propertyId)
    console.log(landlordphonenumber);

    return api.post(propapis + `/landlordstep/${propertyId}`, {landlordname,landlordemail,landlordphonenumber})
    .then(
        (response)=>{
            console.log("response from LandlordCreate from the Property Tables file")
            console.log(response.data);

    })

}




const createCaretaker= async (caretakername,caretakeremail,caretakerphonenumber)=>{
    console.log(`here is the caretakername,caretakeremail,caretakerphonenumber from apicalls.js File ${caretakername,caretakeremail,caretakerphonenumber}`)
    
    const propertyId=JSON.parse(localStorage.getItem("propertyId"));
    console.log("Here is the property Id before I create a caretaker " + propertyId)
    console.log(caretakerphonenumber);

    return api.post(propapis + `/caretakerstep/${propertyId}`, {caretakername,caretakeremail,caretakerphonenumber})
    .then(
        (response)=>{
            console.log("response from CaretakerCreate from the Property Tables file")
            console.log(response.data);

    })

}

export{
    createLandlord,
    createProperty,
    createCaretaker,
}