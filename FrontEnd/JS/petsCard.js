"use strict"

function PetCard(id,photoLink,name,description,ownerId,status,shareLink) {
  return   `<div class="col-md-3" id="${id+"card"}">
    <div class="wsk-cp-product">
      <div class="wsk-cp-img">
        <img
          src="${photoLink}"
          alt="Product" class="img-responsive" />
      </div>
      <div class="wsk-cp-text">
        <div class="category">
          <span>${name}</span>
        </div>
        <div class="title-product">
          <h3>${description}</h3>
        </div>
        <div class="description-prod">
          <p>${status}</p>
        </div>
        <div class="card-footer">
          <div class="wcf-left"><span class="price">Contactame</span></div>
          <div class="wcf-right"><a href="#" class="buy-btn"><i class="fas fa-share"></i></a></div>
          <div class="wcf-right"><a href="${ownerId}" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
        </div>
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

addPetcard(1,'https://storage.googleapis.com/mvsnoticias/2021/10/31fdef09-pexels-blue-bird-7210644-800x1200.jpg',"Tommy","Good Boy",2,"Adopted","facebook.com");
