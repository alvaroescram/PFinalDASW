"use strict";
class PetsException{
    constructor(msj){
        throw msj;
    }
}

class Pets{
    constructor(){
       this._id;
       this._ownerId;
       this._status;
       this._location;
       this._breed;
       this._age;
       this._img_links;
       this._mainPicLink;
       this._animaltype;
    }

}