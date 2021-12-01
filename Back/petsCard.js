"use strict"

function PetCard(id,ownerId,location,breed,age,mainPicLink,animaltype) {
  return   `<div class="col-md-3" id="${id+"card"}">
    <div class="wsk-cp-product">
      <div class="wsk-cp-img">
        <img
          src="${mainPicLink}"
          alt="Product" class="img-responsive" />
      </div>
      <div class="wsk-cp-text">
        <div class="category">
          <span>${breed}</span>
        </div>
        <div class="title-product">
          <h2>Edad: ${age}</h2>
          <h>${location}</h>
        </div>
        <div class="description-prod">
          <p>${animaltype}</p>
        </div>
        <div class="card-footer">
          <div class="wcf-left"><span class="price">Contactame</span></div>
          <div class="wcf-right"><a href="#" class="buy-btn"><i class="fas fa-share"></i></a></div>
          <div class="wcf-right"><a href="${ownerId}" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
        </div>
      </div>
    </div>`;
}

function addPetcard(id,photoLink,name,description,ownerId,status,sharelink){
  let petCards = document.getElementById("petsCards");
  let card = PetCard(id,photoLink,name,description,ownerId,status,sharelink);
  petCards.innerHTML = petCards.innerHTML + card;
}

function removePetcard(id){
  let petCard = document.getElementById(id+"card")
  petCard.remove()
}