var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var camps = [
    { name: "Guatape", image: "https://farm7.staticflickr.com/6186/6090714876_44d269ed7e.jpg"},
    { name: "Arvi", image: "https://farm1.staticflickr.com/93/246477439_5ea3e472a0.jpg"},
    { name: "Colorado", image: "https://farm7.staticflickr.com/6210/6090170567_6df55f8d83.jpg"},{ name: "Guatape", image: "https://farm7.staticflickr.com/6186/6090714876_44d269ed7e.jpg"},
    { name: "Arvi", image: "https://farm1.staticflickr.com/93/246477439_5ea3e472a0.jpg"},
    { name: "Colorado", image: "https://farm7.staticflickr.com/6210/6090170567_6df55f8d83.jpg"},{ name: "Guatape", image: "https://farm7.staticflickr.com/6186/6090714876_44d269ed7e.jpg"},
    { name: "Arvi", image: "https://farm1.staticflickr.com/93/246477439_5ea3e472a0.jpg"},
    { name: "Colorado", image: "https://farm7.staticflickr.com/6210/6090170567_6df55f8d83.jpg"},{ name: "Guatape", image: "https://farm7.staticflickr.com/6186/6090714876_44d269ed7e.jpg"},
    { name: "Arvi", image: "https://farm1.staticflickr.com/93/246477439_5ea3e472a0.jpg"},
    { name: "Colorado", image: "https://farm7.staticflickr.com/6210/6090170567_6df55f8d83.jpg"}
];

//get method of campgrounds
router.get('/', function(req, res, next) {
    res.render("campgrounds", { title: 'Campgrounds', camps: camps });
});

//POST method of campgrounds
router.post('/',function (req, res, next) {
    var name = req.body.campname;
    var img = req.body.campimg;
    camps.push({name: name, image:img});
    res.redirect('/campgrounds');
});

//method to get view of new campground
router.get('/new',function (req, res, next) {
    res.render("new", { title: 'New Campgrounds'});
});

module.exports = router;
