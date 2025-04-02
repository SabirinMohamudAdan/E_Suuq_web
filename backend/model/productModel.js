const mongoose = require("mongoose")

const modelProduct = mongoose.Schema({
        prName: {
                type: String,
                require: true
        },
        description: {
                type: String,
                require: true
        },
        price: {
                type: Number,
                require: true
        },

        category: {
                type: String,
                require: true
        },
        image: {
                type: String,
                require: true
        }
              
}, { timestamps: true })

module.exports = mongoose.model("product" , modelProduct)