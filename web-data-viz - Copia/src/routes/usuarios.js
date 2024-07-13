var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/nota", function (req, res) {
    usuarioController.nota(req, res);
});

router.post("/salvar", function (req, res) {
    usuarioController.salvar(req, res);
})

router.post("/exibir1", function (req, res) {
    usuarioController.exibir1(req, res);
})

module.exports = router;