const db = require("../database/db.js");
const bcrypt = require("bcrypt");

exports.getAll = (req, res) => {
  const sql = "SELECT * FROM policiais;";
  db.query(sql, (error, resultado) => {
    if (error) {
      return res.status(500).json({ erro: error });
    } else {
      res.json(resultado);
    }
  });
};

exports.create = async (req, res) => {
  try {
    const { rg_civil, rg_militar, cpf, data_nascimento, matricula } = req.body;

    // Gera hash seguro da matrícula
    const hashedMatricula = await bcrypt.hash(matricula, 10); // 10 = salt rounds

    const sql = `
      INSERT INTO policiais (rg_civil, rg_militar, cpf, data_nascimento, matricula)
      VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql, [rg_civil, rg_militar, cpf, data_nascimento, hashedMatricula], (error, resultado) => {
      if (error) {
        console.error("Erro ao inserir policial:", error);
        return res.status(500).json({ erro: "Erro ao cadastrar policial." });
      }

      res.status(201).json({
        message: "Policial cadastrado com sucesso!",
        id: resultado.insertId,
      });
    });
  } catch (err) {
    console.error("Erro no bcrypt:", err);
    res.status(500).json({ erro: "Erro interno ao processar matrícula." });
  }
};
