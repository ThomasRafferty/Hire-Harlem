var mongoose = require("mongoose");

var businessSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    address: String,
    website: String,
    owner: String,
    description: String,
    category: String,
    subCategory: String,
    searchTags: String,
    image: String,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Business", businessSchema);

