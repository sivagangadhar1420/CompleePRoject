const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
    config = require('./DB');

    const registrationRoute = require('./routes/registration.route');
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology:true}).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    
        
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/registration', registrationRoute);

    let port = 4200;

    const server = app.listen(function(){
        console.log('Listening on port ' + port);
    });