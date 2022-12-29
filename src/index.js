const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {PORT} = require('./config/configServer');

const ApiRoute = require('./route/index');
createAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoute);

    app.listen(PORT, ()=>{
        console.log("server started at ",PORT)
    })
}

createAndStartServer();