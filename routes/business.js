var express = require("express");
var router = express.Router();
var Business = require("../models/business");


//INDEX - show all businesses
router.get("/business", function(req, res){
    //Get all businesses from DB
    Business.find({},function(err,allBusinesses){
        if(err){
            console.log("Error!");
        } else {
            res.render("index",{business:allBusinesses});
        }
    });
});
//Create
router.post("/business",isLoggedIn, function(req, res){
    // res.send("You hit post route")
    //get data from form and add to business array
    var name = req.body.name;
    var phone = req.body.phoneNumber;
    var web = req.body.website;
    var addr = req.body.address;
    var owner = req.body.owner;
    var desc = req.body.description;
    var cate = req.body.category;
    var subCat = req.body.subCategory;
    var tags = req.body.searchTags;
    var image = req.body.image;
    var newBusiness = {name:name, phoneNumber:phone, website:web, address:addr, owner:owner, description:desc, category:cate, subCat:subCat, searchTags:tags, image:image};
    //Create a new business and save to DB
    Business.create(newBusiness, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
              //redirect back to /business
              res.redirect("/business");
        }
    });
    
    // business.push()
  
});
//NEW
router.get("/business/new", isLoggedIn, function(req, res){
            res.render("new");
});
//SHOW -shows more info about business
router.get("/business/:id",function(req,res){
    //find the business with provided ID
    Business.findById(req.params.id,function(err,foundBusiness){
        if(err){
            console.log(err);
        } else {
          //render show template with that business
          res.render("show", {business:foundBusiness});
        }
    });
});

//Edit business
router.get("/business/:id/edit", function(req, res) {
    Business.findById(req.params.id, function(err, foundBusiness){
        if(err){
            res.redirect("/business")
        } else{
            res.render("edit", {business:foundBusiness});
        }
    });
});


//UPDATE business

router.put("/business/:id", function(req,res){
    //find and update the correct business
    
    Business.findByIdAndUpdate(req.params.id, req.body.business, function(err, updatedBusiness){
        if(err){
            res.redirect("/business");
        } else {
            //redirect to directory
            res.redirect("/business/" + req.params.id);
        }
    });

});
//DESTTROY BUSINESS ROUTE
router.delete("/business/:id", function(req, res){
    // res.send("deletingmeeeeeeee");
    Business.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/business");
        } else {
            res.redirect("/business");
        }
    });
});




//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","Please login first!");
    res.redirect("/login");
}

module.exports = router;