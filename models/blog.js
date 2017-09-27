var mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
    image1: String,
    blogEntry: String,
    image2: String,
});

module.exports = mongoose.model("Business", blogSchema);

