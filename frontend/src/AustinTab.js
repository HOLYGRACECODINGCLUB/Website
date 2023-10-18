import React, { useState, useEffect } from 'react';

import axios from 'axios';  
function Any(){
    const requestBody = {
        path_file: "INR"
      };
      useEffect(() => {
        const handleSubmit = async () => {
          //function used to sent post request for backend(serverside)
          try {
            const response = await axios.post("api", requestBody);
            console.log(response);
          }  
          catch (error) {
            console.log(error);
          }
          }
          document.getElementById("nameit").onclick = function (e) {
            handleSubmit();
            e.preventDefault();
          };
        }); 
        
    return(<button id="nameit">pay</button>);
};
export default Any;