"use strict"

async function loadPets(url) {
    let response = await fetch(url);
    if (response.status != 200) return [];
        return await response.json()
}

function displayPets() {
    loadPets('http://localhost:3000/api/pets').then(pets => {
        for(let x in pets){
            addPetcard(pets[x].id,pets[x].mainPicLink,pets[x].name,pets[x].description,pets[x].ownerEmail,pets[x].breed,pets[x].age,pets[x].sex,pets[x].animalType,'share')
        }
    })
}

displayPets()