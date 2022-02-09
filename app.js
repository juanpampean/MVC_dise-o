const express = require('express');
const app = express();

const path = require('path')
app.use(express.static(path.join(__dirname,'public')));


const rutaMain = require('./routers/main');
app.use('/', rutaMain);

app.listen(3000,()=>{
    console.log("Servidor funcionando")
});


