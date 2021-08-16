const pool = require("../base/mysql");
const listar = async () => {
  const sql = "SELECT * FROM Crud";
  return await pool.query(sql);
};
const add = async (data) => {
  const sql = `
    INSERT INTO Crud(
        nombre, apellidos, email, genero, ciudad)
    VALUES(
        ?,      ?,          ?,      ?,       ?    
    )`;
  return await pool.query(sql, data);
};
const eliminar = async (data) => {
  const sql = `DELETE FROM Crud WHERE id=?`;
  return await pool.query(sql, data);
};
const actualizar = async (data) => {
  const sql = `
    UPDATE Crud SET
      nombre=?, 
      apellidos=?, 
      email=?, 
      genero=?, 
      ciudad=? 
    WHERE 
      id=? 
  `;
  return await pool.query(sql, data);
};
module.exports = {
  listar,
  add,
  eliminar,
  actualizar,
};
