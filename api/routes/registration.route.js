const express = require('express');
const app = express();
const registrationRoutes = express.Router();

// Require Business model in our routes module
let Registration = require('../models/Registration');

// Defined store route
registrationRoutes.route('/add').post(function (req, res) {
  let registration = new Registration(req.body);
  registration.save()
    .then(registration => {
      res.status(200).json({'registration': 'registration in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
registrationRoutes.route('/').get(function (req, res) {
    Registration.find(function (err, registration){
    if(err){
      console.log(err);
    }
    else {
      res.json(registration);
    }
  });
});

// Defined edit route
registrationRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Registration.findById(id, function (err, registration){
        res.json(registration);
    });
  });

//  Defined update route
registrationRoutes.route('/update/:id').post(function (req, res) {
    Registration.findById(req.params.id, function(err, next, registration) {
    if (!registration)
      return next(new Error('Could not load Document'));
    else {
        registration.hotelcode = req.body.hotelcode;
        registration.hotelname = req.body.hotelname;
        registration.hotellocation = req.body.hotellocation;

        registration.save().then(registration => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
registrationRoutes.route('/delete/:id').get(function (req, res) {
    Registration.findByIdAndRemove({_id: req.params.id}, function(err, registration){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = registrationRoutes;
