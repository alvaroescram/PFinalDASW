'use strict'

function addPetcard(id,photoLink,name,description,ownerId,status,sharelink){
    let petCards = document.getElementById("petsCards");
    let card = PetCard(id,photoLink,name,description,ownerId,status,sharelink);
    petCards.innerHTML = petCards.innerHTML + card;
}

function removePetcard(id){
    let petCard = document.getElementById(id+"card")
    petCard.remove()
}

addPetcard(1,'https://storage.googleapis.com/mvsnoticias/2021/10/31fdef09-pexels-blue-bird-7210644-800x1200.jpg',"Tommy","Good Boy",2,"Adopted","facebook.com");

exports.addPetcard = addPetcard()