const contato = require('../models/ContatoModel')

exports.index = async (req, res) => {
  const contatos = await contato.buscaContatos(req.user._id)
  res.render("index", { contatos });
};


