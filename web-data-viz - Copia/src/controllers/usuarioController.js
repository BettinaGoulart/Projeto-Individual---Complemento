var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu username está undefined!");
    }

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }

    else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    }

    else {

        usuarioModel.autenticar(nome, email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        //TUTORIAL FALA PRA APAGAR AQUI

                        res.json(resultadoAutenticar[0]);
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var celular = req.body.celularServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    // var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    else if (celular == undefined) {
        res.status(400).send("Seu celular está undefined!");
    }

    else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }

    else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }

    // else if (empresaId == undefined) {
    //     res.status(400).send("Sua empresa está undefined!");}

    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, celular, email, senha,)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function nota(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.body.idUsuarioServer;
    var nota1 = req.body.nota1Server;
    var nota2 = req.body.nota2Server;
    var nota3 = req.body.nota3Server;
    var nota4 = req.body.nota4Server;
    var nota5 = req.body.nota5Server;
    // var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (nota1 == undefined) {
        res.status(400).send("Seu nota está undefined!");
    }

    else if (nota2 == undefined) {
        res.status(400).send("Seu nota está undefined!");
    }

    else if (nota3 == undefined) {
        res.status(400).send("Seu nota está undefined!");
    }

    else if (nota4 == undefined) {
        res.status(400).send("Sua nota está undefined!");
    }

    else if (nota5 == undefined) {
        res.status(400).send("Sua nota está undefined!");
    }else if(idUsuario == undefined){
        res.status(400).send("Seu id está undefined!");
    }

    // else if (empresaId == undefined) {
    //     res.status(400).send("Sua empresa está undefined!");}

    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js

        usuarioModel.nota(idUsuario, nota1, nota2, nota3, nota4, nota5)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o enviar sua nota! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function salvar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pref1 = req.body.pref1Server;
    var pref2 = req.body.pref2Server;
    var pref3 = req.body.pref3Server;
    var pref4 = req.body.pref4Server;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.salvar(pref1, pref2, pref3, pref4)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


    function exibir1(req, res) {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.exibir1()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    autenticar,
    cadastrar,
    nota,
    salvar,
    exibir1
}