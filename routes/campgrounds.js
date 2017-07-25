var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//SCHEMA SETUP simple campground
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "Granite Hill",
//     image: "https://farm5.staticflickr.com/4330/35083231964_9dd31f5a04.jpg",
//     description: "Stet aperiam apeirian et duo, an eos elit vivendo percipitur. Perfecto urbanitas mediocritatem ne vis. Te affert eligendi vituperata eum. Te natum mandamus qui. Eu vis velit ridens facilisi, ut possim commune aliquando duo."
// }, function(err, camp){
//     if(!err){
//         console.log("Added Granite Hill");
//         console.log(camp);
//     } else {
//         console.log("ERROR ;" + err);
//     }
// });

//get method of campgrounds
router.get('/', function(req, res, next) {
    //Get all campgrounds from DB
    Campground.find({}, function (err, camps) {
        if(!err){
            res.render("campgrounds", { title: 'Campgrounds', camps: camps })
        } else {
            console.log("ERROR ;" + err);
        }
    });
});

//POST method of campgrounds
router.post('/',function (req, res, next) {
    var name = req.body.campname;
    var img = req.body.campimg;
    var desc = req.body.desc;
    var newCamp = {name: name, image:img, description:desc};

    //Create new campground to save to DB
    Campground.create(newCamp, function (err, camp) {
        if(!err){
            res.redirect('/campgrounds');
        } else {
            console.log("ERROR ;" + err);
        }
});

    //res.redirect('/campgrounds');
});

//method to get view of new campground
router.get('/new',function (req, res, next) {
    res.render("new", { title: 'New Campgrounds'});
});

//show specific campground
router.get('/:id', function (req, res, next) {
    //Find the necessary camp
    Campground.findById(req.params.id, function (err, camp) {
        if(!err){
            res.render("showcamp", {title: "Show Camp", camp: camp});
        } else {
            console.log("ERROR ;" + err);
        }
    });
});

module.exports = router;
