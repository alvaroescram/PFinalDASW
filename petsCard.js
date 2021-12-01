"use strict"

function PetCard(id,photoLink,name,description,ownerEmail,status,shareLink) {
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
        <img data-toggle="modal" data-target="#modal_${id}"
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
          <div class="wcf-right"><a href= "mailto:${ownerEmail}?subject=solicitud de adopcion&body=Hola quiero adoptar a ${name}, me gustaria programar una cita para conocerlo" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
        </div>
      </div>
    </div>
  </div>


  <!-- Modal -->
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

addPetcard(1,'https://storage.googleapis.com/mvsnoticias/2021/10/31fdef09-pexels-blue-bird-7210644-800x1200.jpg',"Tommy","Good Boy","usuariorandom@tindpet.com","Adopted","facebook.com");
addPetcard(2,'https://storage.googleapis.com/mvsnoticias/2021/10/31fdef09-pexels-blue-bird-7210644-800x1200.jpg',"Rufo","rufo es un perrito muy alegre, tiene 3 años y es muy jugueton, convive bien con niños y tiene todas sus vacunas a la fecha","usuariocualquiera@tindpet.com","Adopted","facebook.com");
