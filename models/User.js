const mongoose = require('mongoose');

// A mongoose schema for an api user

const UserSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    salt: {
        type: Number,
        required: true
    }

}, {
    collection: 'user'
});

module.exports = mongoose.model('User_db', UserSchema);
