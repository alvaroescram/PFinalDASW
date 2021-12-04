"use strict"

const Pet = require('../models/pets')

function getPets(req, res) {
    Pet.find({}).then(pets => res.status(200).json(pets))
}

function getPetById(petID,res){
    Pet.findOne({id: `1`}).then(pet => res.status(200).json(pet));  //`${petID}`
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

let newPet = {
    id: "814",
    name: "Rocky",
    location: "Direccion 5",
    breed: "Sirio",
    age: "0.4",
    sex: "Hembra",
    mainPicLink:'https://previews.123rf.com/images/enika/enika1112/enika111200115/11704609-h%C3%A1mster-en-manos-de-los-ni%C3%B1os.jpg',
    animalType: "Hamster",
    ownerEmail: "email5@hotmail.com",
    description: "Tranquila y se deja acariciar."
}

//addNewPet(newPet)

exports.getPets = getPets;
exports.getPetById= getPetById;
exports.createPet = createPet;
exports.deletePet = deletePet;