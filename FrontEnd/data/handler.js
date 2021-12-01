"use strict"

async function loadPets(url) {
    let response = await fetch(url);
    if (response.status != 200) return [];
    return await response.json;
}

function displayPets() {
    loadPets('http://localhost:3000/api/pets').then(pets => {
        addPetcard(pets.map(pets.generateUser))
    })
}