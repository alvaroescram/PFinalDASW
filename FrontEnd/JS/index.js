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

//Añadir nueva mascota

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

// Filtro por Nombre
function petName(data){
    Pet.findOne({'name': new RegExp(data)}, (err,docs) => console.log(docs))
}

petName("Kira")

// imprimir PetCards

function addPetcard(id,photoLink,name,description,ownerId,status,sharelink){
    let petCards = document.getElementById("petsCards");
    let card = PetCard(id,photoLink,name,description,ownerId,status,sharelink);
    petCards.innerHTML = petCards.innerHTML + card;
}

function removePetcard(id){
    let petCard = document.getElementById(id+"card")
    petCard.remove()
}

//addMenu();
addPetcard(1,'https://storage.googleapis.com/mvsnoticias/2021/10/31fdef09-pexels-blue-bird-7210644-800x1200.jpg',"Tommy","Good Boy",2,"Adopted","facebook.com");
//removePetcard(1)

/*
Pet.find({},(err,docs) => {
    for(let pet in docs){
        addPetcard("125",docs.mainPicLink,docs.name,docs.breed,docs.ownerid,docs.status,docs.animalType)
        console.log(docs[pet])
    }
});*/
