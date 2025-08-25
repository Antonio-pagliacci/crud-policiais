const db = require("../database/db.js");
const bcrypt = require("bcrypt");

class PoliciaisService {

  async createPolicial(policial) {
    const { rg_civil, rg_militar, cpf, data_nascimento, matricula } = policial;

    // Remove formatação do CPF (apenas números)
    const cpfNumeros = cpf.replace(/\D/g, '');

    // Valida quantidade de dígitos
    if (cpfNumeros.length !== 11) {
      throw new Error("CPF inválido");
    }

    // Criptografa a matrícula
    const hashedMatricula = await bcrypt.hash(matricula, 10);

    const sql = `
      INSERT INTO policiais (rg_civil, rg_militar, cpf, data_nascimento, matricula)
      VALUES (?, ?, ?, ?, ?)
    `;

    return new Promise((resolve, reject) => {
      db.query(
        sql,
        [rg_civil, rg_militar, cpfNumeros, data_nascimento, hashedMatricula],
        (err, result) => {
          if (err) return reject(err);
          resolve(result.insertId);
        }
      );
    });
  }

  getAllPoliciais() {
    const sql = "SELECT * FROM policiais;";
    return new Promise((resolve, reject) => {
      db.query(sql, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }
}

module.exports = new PoliciaisService();
