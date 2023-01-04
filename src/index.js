const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/configServer');
const ApiRoute = require('./route/index');
const sequelize = require('sequelize');
const db = require('./models/index');
const {User, Role} = require('./models/index');
createAndStartServer = ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoute);

    app.listen(PORT, async()=>{
        console.log("server started at ",PORT)
       //db.sequelize.sync({alter: true});
       const u1 = await User.findByPk(17);
       const r1 = await Role.findByPk(2);
       u1.addRole(r1);
    //    const response = await u1.hasRole(r1);
    //    console.log(response);
    })
}

createAndStartServer();