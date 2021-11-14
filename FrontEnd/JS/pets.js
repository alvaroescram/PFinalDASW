"use strict";
class PetsException{
    constructor(msj){
        throw msj;
    }
}

class Pets{
    constructor(id,ownerId,status,location,breed,age,img_links,mainPic,animaltype){
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
    set id(val){
        return new PetsException("Can't change Pets id");
    }
    get id(){
        return this._id;
    }
    set ownerId(val){
        return new PetsException("Can't change owner Id");
    }
    get ownerId(){
        return this._ownerId;
    }
    set status(val){
        this._status = val;
    }
    get status(){
        return this._status;
    }
    set location(val){
        this._location = val;
    }
    get location(){
        return this._location;
    }
    set breed(val){
        this._breed = val;
    }
    get breed(){
        return this_breed;
    }
    set age(val){
        this._age = val;
    }
    get age(){
        return this._age;
    }
    set img_links(val){
        this._img_links = val ;
    }

}