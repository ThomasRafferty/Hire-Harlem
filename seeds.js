var mongoose = require("mongoose");
var Business = require("./models/business");

var data = [
    {
        name : "B2 Harlem",
        phoneNumber : "(212) 280-2248",
        website : "https://www.b2harlem.com",
        address : "271 W 119th St, New York, NY 10026",
        owner : "Black Women-owned",
        description : "Billie’s Black restaurateur Adriane Ferguson collaborated with HGTV celebrity designer Mikel Welch to launch B² Harlem; a new seafood concept for the Harlem community. B² Harlem will give you a downtown upscale casual dining experience right in the heart of Harlem. The menu boast dishes such as Fresh Oysters, Tempura Filled Squash Blossoms, Oyster Chowder and King Crab Squid Ink Pasta. ",
        category : "Food",
        subCategory : "Restaurant",
        searchTags : "\nRestaurant, Seafood, Food\n",
        image : "http://images.nymag.com/images/2/realestate/neighborhoods/2010/harlem100414_lede.jpg"
    },
    {
        name : "Blujeen",
        phoneNumber : "(212) 256-1073",
        website : "http://www.blujeennyc.com",
        address : "2143 Frederick Douglass Blvd, New York, NY 10026",
        owner : "Black-owned",
        description : "Here at blujeen we blend traditional soul, southern, and American cooking with new ingredients, a few new techniques and twists, but never straying too far from the “soul” of the dish.\n",
        category : "Food",
        subCategory : "Restaurant",
        searchTags : "Soul Food, Soulfood, Southern Food,",
        image : "http://images.nymag.com/images/2/realestate/neighborhoods/2010/harlem100414_lede.jpg"
    },
    {
        name : "BLVD Bistro",
        phoneNumber : "(212) 678-6200",
        website : "http://www.boulevardbistrony.com",
        address : "239 Malcolm X Blvd, New York, NY 10027",
        owner : "Black-owned",
        description : "BLVD is both a family business and personal calling. Carlos, who started cooking at the age of 6 while growing up in Natchez, Mississippi, focuses on the food, menu and music—a personally curated mix ranging from classic and contemporary R&B, pop and soul artists, to classic gospel and Aretha in all her manifestations- while his wife Markisha focuses on the business aspects of a shared passion for great food served in a warm, welcoming setting.",
        category : "Food",
        subCategory : "Restaurant",
        searchTags : "Restaurant, Soul Food, Contemporary",
        image : "http://images.nymag.com/images/2/realestate/neighborhoods/2010/harlem100414_lede.jpg"
    },
    {
        name : "Devins Fish and Chips",
        phoneNumber : "(212) 491-5518",
        website : "",
        address : "747 St Nicholas Ave New York, New York\n",
        owner : "Black-owned",
        description : "Renowned Harlem seafood / Fish & Chips restaurant",
        category : "Food",
        subCategory : "Restaurant",
        searchTags : "Fish, Seafood",
        image : "http://images.nymag.com/images/2/realestate/neighborhoods/2010/harlem100414_lede.jpg"
    },
    {
        name : "Famous Fish Market",
        phoneNumber : "(212) 491-8323",
        website : "http://www.yelp.com/biz/famous-fish-market-new-york",
        address : "684 St. Nicholas Ave, New York, NY 10030",
        owner : "Black-owned",
        description : "Small, popular  fish shack ",
        category : "Food",
        subCategory : "Restaurant",
        searchTags : "Fish, Food",
        image : "https://b.zmtcdn.com/data/reviews_photos/94f/8276e3b627a7ec4fbf7739541ba9e94f.jpg"
    },
    {
        name : "Harlem Shake",
        phoneNumber : "(212) 222-8300",
        website : "www.harlemshakenyc.com",
        address : "100 W 124th St, New York, NY",
        owner : "Woman-owned",
        description : "From our burgers made with custom blend Pat LaFrieda patties, NY-style, all-beef hot dogs, chicken sandwiches and grilled cheese/melts, to our entrée-size salads, sides and hand-spun shakes featuring Blue Marble Ice Cream, we use only the highest-quality, all-natural ingredients.\n\n",
        category : "Food",
        subCategory : "Restaurant",
        searchTags : "Burgers",
        image : "https://www.harlemshakenyc.com/hs-admin/assets/uploads/news/people/ebe4ab23ff4bf8818424dd9976da483d.jpg"
    },
    {
        name : "Harlem Shake",
        phoneNumber : "212-222-8311",
        website : "www.harlemshakenyc.com",
        address : "2162 2nd Ave New York,NY",
        owner : "Woman-owned",
        description : "From our burgers made with custom blend Pat LaFrieda patties, NY-style, all-beef hot dogs, chicken sandwiches and grilled cheese/melts, to our entrée-size salads, sides and hand-spun shakes featuring Blue Marble Ice Cream, we use only the highest-quality, all-natural ingredients.\n\n",
        category : "Food",
        subCategory : "Restaurant",
        searchTags : "Burgers, Shakes, Restaurant, Food",
        image : "https://www.harlemshakenyc.com/hs-admin/assets/uploads/news/people/ebe4ab23ff4bf8818424dd9976da483d.jpg"   
    },
    {
    name : "Harlem Doggie Day Spa",
    phoneNumber : "(646)524-7936",
    website : "https://harlemdoggiedayspa.com/",
    address : "734 Saint Nicholas Ave. New York, NY 10031\n",
    owner : "Black-owned",
    description : "Doggie day spa and grooming\n",
    category : "Services",
    subCategory : "Pets",
    searchTags : "Pets, Pet Grooming, Animals, Dogs\n",
    image: "https://assets.dnainfo.com/photo/2016/12/1482184245-286010/larger.jpg"
    }
]

function seedDB(){
    //Remove all businesses
    Business.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("removed businesss");
     //add a few businesses
    data.forEach(function(seed){
        Business.create(seed, function(err, data){
            if(err){
                console.log(err)
            } else{
                console.log("added a business");
            }
        });
    });
    });
   
    
    
    //add a few reviews
}

module.exports = seedDB;