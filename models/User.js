var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

const EventUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
});



const EventUser = mongoose.model('EventUser', EventUserSchema, 'EventUsers');
module.exports = EventUser;