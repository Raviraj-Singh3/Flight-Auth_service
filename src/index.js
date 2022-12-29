const express = require('express');
const app = express();
const {PORT} = require('./config/configServer');
 
createAndStartServer = ()=>{

    app.listen(PORT, ()=>{
        console.log("server started at ",PORT)
    })
}

createAndStartServer();