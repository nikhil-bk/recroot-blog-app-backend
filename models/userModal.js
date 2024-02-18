const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    _id: {

        type: String,
        required: true,

    },
    username: {

        type: String,
        required: true,
        trim: true

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: Object,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("user", userSchema)