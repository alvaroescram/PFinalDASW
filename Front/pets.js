"use strict";
class PetsException {
    constructor(msj) {
        throw msj;
    }
}

class Pets {
    constructor(id, name, ownerId, status = "En adopción", location, breed, age, img_links, mainPic, animaltype) {
        if (ownerId === undefined) return;
        this._id = id === undefined ? setPetId() : id;
        this._ownerId = ownerId;
        this._location = location;
        this._breed = breed;
        this._age = age;
        this._img_links = img_links === undefined ? [] : img_links;
        this._mainPicLink = mainPic === undefined ? 'https://vcahospitals.com/deer-creek-littleton/specialty/-/media/vca/images/paw_print.jpg?h=525&w=700&la=en&hash=AADFE7DBC1DFA86AC330DC542FBAC864' : mainPic;
        this._animaltype = animaltype;
    }
    set id(val) {
        return new PetsException("Can't change Pets id");
    }
    get id() {
        return this._id;
    }
    set ownerId(val) {
        return new PetsException("Can't change owner Id");
    }
    get ownerId() {
        return this._ownerId;
    }
    set location(val) {
        this._location = val;
    }
    get location() {
        return this._location;
    }
    set breed(val) {
        this._breed = val;
    }
    get breed() {
        return this_breed;
    }
    set age(val) {
        this._age = val;
    }
    get age() {
        return this._age;
    }
    set img_links(val) {
        this._img_links = val;
    }
    get img_links() {
        return this._img_links;
    }

    set mainPicLink(val) {
        this._mainPicLink = val;
    }
    get mainPicLink() {
        return this._mainPicLink;
    }
    set animaltype(val) {
        this._animaltype = val;
    }
    get animaltype() {
        return this._animaltype;
    }
    addImage(val) {
        this._img_links.push(val);
    }
    removeImage(link) {
        let index = this._img_links.IndexOf(link);
        if (index === -1) return;
        this._img_links.splice(index, 1);
    }

    static generatePet(pet) {
        let id = pet.id != undefined ? pet.id : user._id;ç
        let ownerid = pet.ownerid != undefined ? pet.ownerid : user._ownerid;
        let location = pet.location != undefined ? pet.location : user._location;
        let breed = pet.breed != undefined ? pet.breed : user._breed;
        let age = pet.age != undefined ? pet.age : user._age;
        let img_links = pet.img_links != undefined ? pet.img_links : user._img_links;
        let mainPicLink = pet.mainPicLink != undefined ? pet.mainPicLink : user._mainPicLink;
        let animaltype = pet.animaltype != undefined ? pet.animaltype : user._animaltype;

        return new Pets(id,ownerid,location,breed,age,img_links,mainPicLink,animaltype);
    }
}