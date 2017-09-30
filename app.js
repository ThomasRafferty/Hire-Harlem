var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    flash           = require("connect-flash"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    User            = require("./models/user"),
    Business        = require("./models/business"),
    // seedDB          = require("./seeds");
    request         = require("request");
    
var businessRoutes  = require("./routes/business"),
    authRoutes      = require("./routes/auth"),
    searchRoutes    = require("./routes/search");
    
//App config
// var url = process.env.DATABASEURL || "mongodb://localhost/hh-business";
// var url = process.env.DATABASEURL || "mongodb://alexocampo:hireharlem@hhtest-shard-00-02-ywyx5.mongodb.net:27017";
// mongoose.connect(url);
mongoose.connect("mongodb://alexocampo:hireharlem@hhtest-shard-00-00-ywyx5.mongodb.net:27017,hhtest-shard-00-01-ywyx5.mongodb.net:27017,hhtest-shard-00-02-ywyx5.mongodb.net:27017/test?ssl=true&replicaSet=hhtest-shard-0&authSource=admin");
// mongoose.connect("mongodb://localhost/hh-business",{useMongoClient: true});
// mongoose.connect(process.env.DATABASEURL,{useMongoClient: true});
// mongoose.connect("mongodb://hireharlem:hireharlem@ds155424.mlab.com:55424/hhtest");
// delete ^ actual database URL when open sourcing project

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// console.log(__dirname);
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Secret sites to add businesses",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// Business.create(
//     {
//     name: "Bluejeen",
//     phoneNumber: "(212) 256-1703",
//     address: "2143 Frederick Douglass Blvd, New York, NY 10026",
//     website: "http://www.blujeennyc.com",
//     owner: "Black-owned",
//     description: "Here at blujeen we blend traditional soul, southern, and American cooking with new ingredients, a few new techniques and twists, but never straying too far from the “soul” of the dish.",
//     category: "Food",
//     subCategory: "Restaurant",
//     searchTags: "Soul Food, Soulfood, Southern Food",
//     image: "http://images.nymag.com/images/2/realestate/neighborhoods/2010/harlem100414_lede.jpg",
//     },
//     function(err,business){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("New business: ");
//             console.log(business);
//         }
//     }
// );

//RESTful Routes

app.get("/home", function(req, res){
    Business.find({},function(err, business){
        if(err){
            console.log("Error!");
        } else {
            res.render("home",{home:business});
        }
    });
});

app.get("/about", function(req, res){
    Business.find({},function(err, business){
        if(err){
            console.log("Error!");
        } else {
            res.render("about",{about:business});
        }
    });
});
app.get("/team", function(req, res){
    Business.find({},function(err, business){
        if(err){
            console.log("Error!");
        } else {
            res.render("team",{team:business});
        }
    });
});

app.use(authRoutes);
app.use(businessRoutes);
app.use(searchRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("HH running...");
});