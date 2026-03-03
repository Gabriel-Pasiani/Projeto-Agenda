const contato = require('../models/ContatoModel')

exports.index = async (req, res) => {
  const contatos = await contato.buscaContatos()
  res.render("index", { contatos });
};


