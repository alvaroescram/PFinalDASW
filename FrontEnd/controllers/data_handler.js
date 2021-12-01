"use strict"

const Pet = require('../models/pets')

function getPets(req, res) {
    Pet.find({}).then(pets => res.status(200).json(pets))
}

function getPetByBreed(breed,res){
    Pet.findOne({breed: `${breed}`}).then(pet => res.status(200).json(user));
}

function createPet(req, res) {
    let pet = Pet(req.body);
    pet.save()
}

function deletePet(req, res) {
    Pet.findOneAndDelete({ id: `${req}` }).then(pet => {
        res.type('text/plain; charset=utf-8');
        res.send(user != undefined ? `User ${user.firstName} was deleted!` : `No user with email ${email} was found!`);
    });
}

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

exports.getPets = getPets;
exports.getPetByBreed = getPetByBreed;
exports.createPet = createPet;
exports.deletePet = deletePet;