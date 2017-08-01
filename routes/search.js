var express = require('express');
var router = express.Router();

var Campground = require('../models/campground');
var mongoose = require('mongoose');

router.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {

    var term = req.query.key;

    Campground.find({name : term}, function (err, camps) {
        if(!err){
            res.render("search", { title: 'Search', camps: camps})
        } else {
            console.log("ERROR ;" + err);
        }
    });

});

module.exports = router;
