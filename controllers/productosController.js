const controller = {
    index:  (req, res) => {
        // const productoID = req.params.id//
        //const productoName = req.params.name///
          const {id: idProducto } = req.params   //destructuring
     
       //res.send('Estas viendo el producto ' + productoID +  productoName)//
         res.send('Estas viendo el producto ' + idProducto )   //destructuring
     },
     comentarios: (req, res) => {
      const {id, idComentario} =req.params
       if (idComentario === undefined) {
          res.send( `Estas viendo los comentario del producto ${id}`) 
       }else{
          res.send( `Estas viendo los comentario del producto ${id}  el comentario especifico ${idComentario}`)     //con bactic//
       }
      //res.send('Estas viendo los comentario del producto ' + id + 'el comentario especifico' + idComentario)//
     
  }
}

module.exports = controller;