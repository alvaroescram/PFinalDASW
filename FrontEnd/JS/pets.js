"use strict";
class PetsException {
    constructor(msj) {
        throw msj;
    }
}

class Pets {
    constructor(id, name, ownerId, status = "For Adpotion", location, breed, age, img_links, mainPic, animaltype) {
        if (ownerId === undefined) return;
        this._id = id === undefined ? setPetId() : id;
        this._name = name;
        this._ownerId = ownerId;
        this._status = status;
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
    set name(val){
        if(val!=undefined)this._name = val;
        else this._name = "No name yet";
    }
    set ownerId(val) {
        return new PetsException("Can't change owner Id");
    }
    get ownerId() {
        return this._ownerId;
    }
    set status(val) {
        this._status = val;
    }
    get status() {
        return this._status;
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
}