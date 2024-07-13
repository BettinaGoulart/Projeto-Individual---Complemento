var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/obterDadosGrafico1", function (req, res) {
    medidaController.obterDadosGrafico1(req, res);
});

router.get("/obterDadosGrafico2", function (req, res) {
    medidaController.obterDadosGrafico2(req, res);
});

router.get("/obterDadosGrafico3", function (req, res) {
    medidaController.obterDadosGrafico3(req, res);
});

router.get("/obterDadosGrafico4", function (req, res) {
    medidaController.obterDadosGrafico4(req, res);
});

router.get("/obterDadosGrafico5", function (req, res) {
    medidaController.obterDadosGrafico5(req, res);
});

// router.get("/tempo-real/:idAquario", function (req, res) {
//     medidaController.buscarMedidasEmTempoReal(req, res);
// })

module.exports = router;