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