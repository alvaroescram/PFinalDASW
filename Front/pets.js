"use strict";
class PetsException {
    constructor(msj) {
        throw msj;
    }
}

class Pets {
    constructor(id, name, ownerEmail, location, breed, age, mainPic, animaltype, description) {
        if (ownerEmail === undefined) return;
        this._name = name;
        this._id = id === undefined ? setPetId() : id;
        this._ownerEmail = ownerEmail;
        this._location = location;
        this._breed = breed;
        this._age = age;
        this._mainPicLink = mainPic === undefined ? 'https://vcahospitals.com/deer-creek-littleton/specialty/-/media/vca/images/paw_print.jpg?h=525&w=700&la=en&hash=AADFE7DBC1DFA86AC330DC542FBAC864' : mainPic;
        this._animaltype = animaltype;
        this._description = description;
    }
    set id(val) {
        return new PetsException("Can't change Pets id");
    }
    get id() {
        return this._id;
    }
    set name(val) {
        this._name = val
    }
    get name() {
        return this._name;
    }
    set ownerEmail(val) {
        return new PetsException("Can't change owner Id");
    }
    get ownerEmail() {
        return this._ownerEmail;
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

    static generatePet(pet) {
        let id = pet.id != undefined ? pet.id : pet._id;
        let name = pet.name != undefined ? pet.name : pet._name
        let ownerEmail = pet.ownerEmail != undefined ? pet.ownerEmail : pet._ownerEmail;
        let location = pet.location != undefined ? pet.location : pet._location;
        let breed = pet.breed != undefined ? pet.breed : pet._breed;
        let age = pet.age != undefined ? pet.age : pet._age;
        let mainPicLink = pet.mainPicLink != undefined ? pet.mainPicLink : pet._mainPicLink;
        let animaltype = pet.animaltype != undefined ? pet.animaltype : pet._animaltype;
        let description = pet.description != undefined ? pet.description : pet._description;

        return new Pets(id,name,ownerEmail,location,breed,age,img_links,mainPicLink,animaltype,description);
    }
}