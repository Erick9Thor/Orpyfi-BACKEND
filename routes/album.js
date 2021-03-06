'use strict'

var exprees = require('express')
var AlbumController = require('../controllers/album');
var api = exprees.Router();
var md_auth = require('../middlewares/authenticated')

var multipart = require('connect-multiparty'); // Poder subir ficheros a trabes de http
var md_upload = multipart({ uploadDir: './uploads/albums' }) //Middleware para la subida/guardado de imagenes.


api.get('/album/:id', md_auth.ensureAuth, AlbumController.getAlbum)
api.post('/album', md_auth.ensureAuth, AlbumController.saveAlbum)
api.get('/albums/:artist?', md_auth.ensureAuth, AlbumController.getAlbums)
api.put('/album/:id', md_auth.ensureAuth, AlbumController.updateAlbum)
api.delete('/album/:id', md_auth.ensureAuth, AlbumController.deleteAlbum)
api.post('/upload-image-album/:id', [md_auth.ensureAuth, md_upload], AlbumController.uploadImage );
api.get('/get-image-album/:imageFile', AlbumController.getImageFile );

module.exports = api;

