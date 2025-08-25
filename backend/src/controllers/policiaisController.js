const db = require("../database/db.js");

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

exports.create = (req, res) => {
  const { id, rg_civil, rg_militar, cpf, data_nascimento, matricula } =
    req.body;
  const sql =
    "INSERT INTO policiais (id, rg_civil, rg_militar, cpf, data_nascimento, matricula)VALUES(?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [id, rg_civil, rg_militar, cpf, data_nascimento, matricula],
    (error) => {
      if (error) {
        return res
          .status(201)
          .json({ message: "Policial cadastrado com sucesso!" });
      }
    }
  );
};
