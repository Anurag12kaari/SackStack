const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelColor: String,
    textColor: String,
});
module.exports = mongoose.model("prod", productSchema);