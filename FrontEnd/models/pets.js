const mongoose = require('mongoose');

let mongoDB = 'mongodb+srv://AdminTools:admin@cluster0.radg0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true});

let petsSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    ownerid: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    breed: {
        type: String,   
        required: true
    },
    age: {
        type: String,
        required: true
    },
    mainPicLink: {
        type: String,
        required: true
    },
    animalType: {
        type: String,
        required: true
    }
});

let Pet = mongoose.model('pet',petsSchema)

module.exports = Pet;
