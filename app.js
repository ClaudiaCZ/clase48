const express = require('express');
const app = express();
const productos = require('./routers/productos.js')
const main = require('./routers/main.js')
const PORT = 3030;



app.use('/productos', productos)
app.use('/', main)

/*parametrizacion de las rutas*/


app.listen(PORT, () => console.log('servidor levantado en  puerto ' + PORT));