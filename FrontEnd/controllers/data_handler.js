"use strict"

const Pet = require('../models/pets')

function getPetByBreed(breed,res){
    Pet.findOne({breed: `${breed}`}).then(pet => res.status(200).json(user));
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

// --- Filtro por Breed ---



petBreed('raza 2')

// --- Json de PetCards ---

function petInfo(req,res){
    Pet.find({}).then(pet =>{
        console.log(pet)
        //res.pet
    }) 
}

//petInfo()

// --- Actualizar Documentos ---

Pet.findOneAndUpdate({nombre: 'Pepe 6'}, {nombre: 'Lorena M'})

