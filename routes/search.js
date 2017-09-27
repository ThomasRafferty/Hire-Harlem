var express = require("express");
var router = express.Router();
var request = require("request");

var Business = require("../models/business");

// PRACTICE SEARCH DB OUTPUT
router.get("/search", function(req, res){
    res.render("search");
});

router.get("/results", function(req, res){
    //search input
    var query = req.query.search;
    // api link
    var url = "https://hh-test-2f942.firebaseio.com/?search=" + query;
   
    request(url, function(error, response, body){
      if (!error && response.statusCode ==200) {
          var data = JSON.parse(body);
          res.render("/results", {data:data});
      }
    }); 
});



    
    // Business.find({},function(err, business){
    //     if(err){
    //         console.log("Error!");
    //     } else {
    //         res.render("search",{search:business});
    //     }
    // });

// CASPIO DB SEARCH
router.get("/caspio", function(req, res){
    Business.find({},function(err, business){
        if(err){
            console.log("Error!");
        } else {
            res.render("caspio",{search:business});
        }
    });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    // req.flash("success","Please login first!");
    res.redirect("/login");
}

module.exports = router;