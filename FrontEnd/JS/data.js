"use strict"

const mongoose = require('mongoose');

let mongoDB = 'mongodb+srv://AdminTools:admin@cluster0.radg0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true});

let UserSchema = mongoose.Schema({

})

let petsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ownerid: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["En Adopción","Adoptado"],
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

let newPet = {
    name: "Tommy",
    ownerid: "2",
    status: "En Adopción",
    location: "Direccion 1",
    breed: "raza 1",
    age: "4",
    mainPicLink:'https://storage.googleapis.com/mvsnoticias/2021/10/31fdef09-pexels-blue-bird-7210644-800x1200.jpg',
    animalType: "Perro"
}

let pet = Pet(newPet)
pet.save().then(doc => console.log(doc))

newPet = {
    name: "Tom",
    ownerid: "2",
    status: "En Adopción",
    location: "Direccion 1",
    breed: "raza 1",
    age: "4",
    mainPicLink:'https://storage.googleapis.com/mvsnoticias/2021/10/31fdef09-pexels-blue-bird-7210644-800x1200.jpg',
    animalType: "Perro"
}

pet = Pet(newPet)
pet.save().then(doc => console.log(doc))
console.log("1")