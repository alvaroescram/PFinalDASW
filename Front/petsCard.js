"use strict"

function PetCard(id,photoLink,name,description,ownerEmail,breed,age,sex,animalType,shareLink) {
  return   `
  
  <div class="col-md-3" id="${id}">
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
      </div>
        <div class="description-prod">
          <h2>Edad: </h2>
          <h3 class="age">${age} años</h3>
          <p></p>
          <h2>Raza: </h2>
          <h3>${breed}</h3>
          <h2>Sexo: </h2>
          <h3 class="sex">${sex}</h3>
          <h class="breed" hidden="true">${animalType}</h>
        </div>
        <div class="card-footer">
          <div class="wcf-left"><span class="price">Contactame</span></div>
          <div class="wcf-right"><a data-toggle="modal" data-target="#modal_${id}_2"href="#" class="buy-btn"><i class="fas fa-share"></i></a></div>
          <div class="wcf-right"><a href= "mailto:${ownerEmail}?subject=solicitud de adopcion&body=Hola quiero adoptar a ${name}, me gustaria programar una cita para conocerlo" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
        </div>
    </div>


  <!-- Modal -->
  <div class="modal " id="modal_${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
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
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <!-- el otro Modal -->


  <div class="modal " id="modal_${id}_2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
  
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">${name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div class="modal-body">
        <h3>compartir en redes sociales:</h3>
        <div id="sn">
        <a href="https://www.facebook.com/sharer/sharer.php?u=[http://localhost:3000/api/pets]"><img src="https://1.bp.blogspot.com/-LDDcjQgRLwU/YJLiFVe-e2I/AAAAAAAAFag/phVGWO9zxTAueSYXquy3x8eFhldD0n53QCLcBGAsYHQ/s600/icono-facebook-png-transparente.png" alt="facebook" width="100" height="100" ></a>
        <a href="https://twitter.com/intent/tweet?text= adopta%20una%20i%20mascota&url=https://aqui va el url&hashtags=TindPet"><img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="instagram" width="110" height="100"></a>
        </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  `;
}

function addPetcard(id,photoLink,name,description,ownerId,breed,age,sex,animalType,sharelink){
  let petCards = document.getElementById("petsCards");
  let card = PetCard(id,photoLink,name,description,ownerId,breed,age,sex,animalType,sharelink);
  petCards.innerHTML = petCards.innerHTML + card;
}

function removePetcard(id){
  let petCard = document.getElementById(id+"card")
  petCard.remove()
}