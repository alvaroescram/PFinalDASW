"use strict"

const router = require('express').Router();
const dataHandler = require('./data_handler');

router.route('/')
  .get((req, res) => dataHandler.getPets(req, res))
  .post((req, res) => dataHandler.createPet(req, res));

router.route('/:petID')
  .get((req, res) => dataHandler.getPetByBreed(req, res))
  .delete((req, res) => dataHandler.deletePet(req, res));

module.exports = router;