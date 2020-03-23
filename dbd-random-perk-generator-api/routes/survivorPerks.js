const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const keys = require('../config/keys');
require('../models/SurvivorPerks');

mongoose.connect(keys.mongoURI);

router.get("/", function(req, res, next){
    const resultArray = [];
    mongoose.connect(keys.mongoURI, function(err, db){
        const perks = db.collection('survivorperks').find();
        perks.forEach(function(doc, err) {
            resultArray.push(doc);
        }, function() {
            db.close();
            res.json(resultArray);
        })
    });
});

module.exports = router;