const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {PORT} = require('./config/configServer');
//const UserRepository = require('./repository/user-repository');
const UserService = require('./service/user-service');

const ApiRoute = require('./route/index');
createAndStartServer = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoute);

    app.listen(PORT, async()=>{
        console.log("server started at ",PORT)
        // const userService = new UserService();
        // const newToken = userService.createToken({ email: 'ravisingh@gmail.com', id: '2' });
        // console.log("new token is", newToken);
    })
}

createAndStartServer();