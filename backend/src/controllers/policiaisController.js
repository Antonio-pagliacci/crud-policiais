// backend/src/controllers/policiaisController.js
const policiaisService = require("../service/policialService.js");

exports.getAll = async (req, res) => {
  try {
    const policiais = await policiaisService.getAllPoliciais();
    res.json(policiais);
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao buscar policiais." });
  }
};

exports.create = async (req, res) => {
  try {
    const id = await policiaisService.createPolicial(req.body);
    res.status(201).json({ message: "Policial cadastrado com sucesso!", id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao cadastrar policial." });
  }
};
