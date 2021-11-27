"use strict";


class User{
    constructor(id,name,lastName, email, address,state, country, zipCode, isFoster, isAdmin, petsId){
        let _id = id;
        let _name = name;
        let _lastname = lastName;
        let _email = email;
        let _location = address;
        let _state = state;
        let _country = country;
        let _zipCode = zipCode;
        let _isFoster = isFoster;
        let _isAdmin = isAdmin;
        let _petsId = petsId;
        let _status = "Active";

    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    set name(val){
        if(val!=undefined)this._name = val;
    }
    get lastName(){
        return this._lastname;
    }
    set lastName(val){
        if(val!=undefined)this._lastname = val;
    }
    get email(){
        return this._email;
    }
    set email(val){
        if(val!=undefined)this._email = val;
    }
    get address(){
        return this._address;
    }
    set address(val){
        if(val!=undefined)this._address= val;
    }
    get state(){
        return this._address;
    }
    set state(val){
        if(val!=undefined)this._state = val;
    }
    get country(){
        return this._country;
    }
    set country(){
        if(val!= undefined)this._country = val;
    }
    get zipCode(){
        return this._zipCode;
    }
    set zipCode(val){
        if(val!=undefined)this._zipCode = val;
    }
    get isFoster(){
        return this._isFoster;
    }
    set isFoster(val){
        if(val!=true&&val!=false)return;
        this._isFoster = val;
    }
    get status(){
        return this._status;
    }
    set status(val){
        if(val!="Active"&&val!="Adoping"&&val!="trial"&&val!="Adopted")return;
        this._status = val;
    }
    get isAdmin(){
        return this._isAdmin;
    }
    get petsId(){
        return this._petsId;
    }
    set petsId(){
        if(val!=undefined)this._petsId = val;
    }
    AddPet(petId){
        this._petsId.push(petId);
    }
    deletePet(petId){
        let index  = this._petsId.indexOf(petId);
        if(index!=-1)this._petsId.splice(index,1);
    }
    makeAdmin(AdminId,newAdmin){
        /**make conexion to se if it has admin previlages */
    }
}