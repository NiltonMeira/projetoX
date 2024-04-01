const elementos = require('../model/elementos');
const ferramentas = require('../model/ferramentas');
const ferramentasPredef = require('../model/ferramentasPredef');
const paginas = require('../model/paginas');
const predefinicoes = require('../model/predefinicoes');
const usuarios = require('../model/usuarios');

module.exports = {
    async usuarios(req, res){
    res.render('../views/index');
    },
    async usuarioInsert(req, res){
    // Recebe as informações do front-end
    const dados = req.body;
    console.log(dados);
    // Criando sala no banco de dados
    await usuarios.create({
    Name: dados.name,
    Email: dados.email,
    Password: dados.password,
    Confirm: dados.passwordConfirm
    });
    // Redirecionar para a página principal
    res.redirect('/');
    }
    }  