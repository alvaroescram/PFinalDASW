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
        //res.type('text/plain; charset=utf-8');
        //res.send(user != undefined ? `Pet ${pet.name} was deleted!` : `No pet with id ${id} was found!`);
    });
}

// --- Añadir nueva mascota ---

function addNewPet(newPet) {
    let pet = Pet(newPet)
    pet.save()
}

exports.getPets = getPets;
exports.getPetByBreed = getPetByBreed;
exports.createPet = createPet;
exports.deletePet = deletePet;

let newPet = {
    id: "814",
    name: "Rocky",
    location: "Direccion 5",
    breed: "Sirio",
    age: ".4",
    sex: "Hembra",
    mainPicLink:'https://previews.123rf.com/images/enika/enika1112/enika111200115/11704609-h%C3%A1mster-en-manos-de-los-ni%C3%B1os.jpg',
    animalType: "Hamster",
    ownerEmail: "email5@hotmail.com",
    description: "Tranquila y se deja acariciar."
}

//addNewPet(newPet)

//deletePet("814")