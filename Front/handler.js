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

function getPetById(id) {
    loadPets('http://localhost:3000/api/pets/"1"').then(pets => {
        console.log(pets)
    })
}

displayPets()
getPetById("1")

function generateUUID(){
    return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{
        let r=Math.random()*16|0;
        let v=c=='x'?r:(r&0x3|0x8);
    return v.toString(16);
    });
  }
  
  function loadPetCard(){
    let id = generateUUID()
    let petName = document.getElementById("nombre_").value
    let petSex = document.getElementById("sexo_").value
    let petType = document.getElementById("tipo_").value
    let petRace = document.getElementById("raza_").value
    let petAge = document.getElementById("edad_").value
    let petUrl = document.getElementById("url_").value
    let ownerEmail = document.getElementById("email_").value
    let petDescription = document.getElementById("descripcion_").value
    //console.log(id,petName,petSex,petType,petRace,petAge,petUrl,ownerEmail,petDescription)
    let newPet = {
        id: id,
        name: petName,
        location: petSex,
        breed: petRace,
        age: petAge,
        sex: petSex,
        mainPicLink: petUrl,
        animalType: petType,
        ownerEmail: ownerEmail,
        description: petDescription
    }
    createPet(newPet)
  }