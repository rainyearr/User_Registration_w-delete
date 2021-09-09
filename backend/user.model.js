const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    user_name: {
        type: String
    },
    user_age: {
        type: String
    },
    user_gender: {
        type: String
    },
    user_email: {
        type: String
    },
    user_phonenumber: {
        type: String
    },
    user_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('User', User);
