const express = require('express');
const Films = require('../models/films')
const filmRouter = new express.Router();

const filmList = new Films();

//SHOW
filmRouter.get('/:id', function(req, res){
  res.json({data: filmList[req.params.id]});
});

//INDEX
filmRouter.get('/', function(req, res){
  res.json({data: filmList})
});

//CREATE
filmRouter.post('/', function(req, res){
  filmList.push(req.body.film);
  res.json({data: filmList});
});

//UPDATE
filmRouter.put('/:id', function(req, res){
  filmList[req.params.id] = req.body.film;
  res.json({data: filmList});
});

//DELETE
filmRouter.delete('/:id', function(req, res){
  filmList.splice(req.params.id, 1);
  res.json({data: filmList});
})

module.exports = filmRouter;
