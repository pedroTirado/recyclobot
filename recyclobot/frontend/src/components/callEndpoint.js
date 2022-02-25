const axios = require('axios');

export const callEndpoint = (string) => {    
   return axios.put('http://localhost:8080/', {
        data: {
            req: string
        }
    });
};