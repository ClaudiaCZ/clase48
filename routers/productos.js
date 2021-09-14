const router = require('express').Router()
const {index, comentarios,} = require('../controllers/productosController.js')

router.get('/:id/', index)
 
 //armamos otra ruta
 
 router.get('/:id/comentarios/:idComentario?', comentarios )
 
module.exports = router;