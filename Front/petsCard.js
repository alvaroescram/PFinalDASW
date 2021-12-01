"use strict"

function PetCard(id,ownerId,location,breed,age,mainPicLink,animaltype,name,description) {
  return   `
  
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css"
      integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">
  <link href="style.css" rel="stylesheet" type="text/css">

  <div class="col-md-3" id="${id+"card"}">
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
    </div>
    
    <!-- Modal -->
    <div class="modal " id="modal_${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal" id="modal_${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
    
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">${name}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div class="modal-body">
          <h3>${description}</h3>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    `;
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