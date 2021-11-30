"use strict"

let mongoose = require('mongoose');

let mongoDB = 'mongodb+srv://AdminTools:admin@cluster0.radg0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true});

let UserSchema = mongoose.Schema({
    user: {
        type: String,
        require: true
    }
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

// --- Añadir nueva mascota ---

/*
let newPet = {
    name: "Dino",
    ownerid: "4",
    status: "En Adopción",
    location: "Direccion 4",
    breed: "raza 4",
    age: "1.5",
    mainPicLink:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMy64eE5AMkBOBUg4NqlSWnBzcSYRI9Y3Z0A&usqp=CAU',
    animalType: "Gato"
}

let pet = Pet(newPet)
pet.save()*/

// --- Filtro por Breed ---

function petBreed(breed,res){
    Pet.findOne({breed: `${breed}`}).then(pet =>{
        console.log(pet)
        res.json(pet)
    });
}

petBreed('raza 2')

// --- Json de PetCards ---

function petInfo(req,res){
    Pet.find({}).then(pet =>{
        console.log(pet)
        //res.pet
    }) 
}

petInfo()

