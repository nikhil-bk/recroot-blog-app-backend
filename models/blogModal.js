const mongoose = require('mongoose')
const userSchema=require("../models/userModal")
const blogSchema = new mongoose.Schema({
    _id: {

        type: String,
        required: true,

    },
    title: {

        type: String,
        required: true,
        trim: true

    },
    author: {
        type: String,
        ref:userSchema,
        required: true,
    },

    content: {
        type: String,
        required: true,

    },

}, { timestamps: true })

module.exports = mongoose.model("blog", blogSchema)