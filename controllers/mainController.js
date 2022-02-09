const express = require('express');
const app=express();

const path = require('path')

const controlador = {
    home : (req, res) => {
        res.sendFile(path.join(__dirname,"../views/home.html"))
    },
};

module.exports = controlador;
