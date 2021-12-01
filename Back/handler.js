"use strict"

async function loadPets(url) {
    let response = await fetch(url);
    if (response.status != 200) return [];
        return await response.json()
}

function displayPets() {
    loadPets('http://localhost:3000/api/pets').then(pets => {
        for(let x in pets){
            console.log(pets[x].id,pets[x].ownerid,pets[x].location,pets[x].breed,pets[x].age,pets[x].mainPicLink,pets[x].animalType)
            addPetcard(pets[x].id,pets[x].ownerid,pets[x].location,pets[x].breed,pets[x].age,pets[x].mainPicLink,pets[x].animalType)
        }
    })
}

displayPets()
