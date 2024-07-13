var database = require("../database/config");

// function buscarUltimasMedidas(idAquario, limite_linhas) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         momento,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
//                     FROM medida
//                     WHERE fk_aquario = ${idAquario}
//                     ORDER BY id DESC LIMIT ${limite_linhas}`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function obterDadosGrafico1() {

    var instrucaoSql = `SELECT nota1, COUNT(*) AS quantidade
    FROM Avaliacao
    WHERE nota1 IN (1, 2, 3, 4, 5)
    GROUP BY nota1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function obterDadosGrafico2() {

    var instrucaoSql = `SELECT nota2, COUNT(*) AS quantidade
    FROM Avaliacao
    WHERE nota2 IN (1, 2, 3, 4, 5)
    GROUP BY nota2;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function obterDadosGrafico3() {

    var instrucaoSql = `SELECT nota3, COUNT(*) AS quantidade
    FROM Avaliacao
    WHERE nota3 IN (1, 2, 3, 4, 5)
    GROUP BY nota3;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function obterDadosGrafico4() {

    var instrucaoSql = `SELECT nota4, COUNT(*) AS quantidade
    FROM Avaliacao
    WHERE nota4 IN (1, 2, 3, 4, 5)
    GROUP BY nota4;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function obterDadosGrafico5() {

    var instrucaoSql = `SELECT nota5, COUNT(*) AS quantidade
    FROM Avaliacao
    WHERE nota5 IN (1, 2, 3, 4, 5)
    GROUP BY nota5;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDadosGrafico1,
    obterDadosGrafico2,
    obterDadosGrafico3,
    obterDadosGrafico4,
    obterDadosGrafico5
}
