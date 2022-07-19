//This is a transporter file so we will use axios here which is a transporter

import axios from "axios";

const url ="http://localhost:5000";     //Told him ka is port pa server chal ra ha hamara

//creating a post function
export const addinfo =async (productdata) =>{
   return await axios.post(`${url}/pakwheels`,productdata);
}




