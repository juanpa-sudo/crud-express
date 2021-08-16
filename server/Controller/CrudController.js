const crud = require("../model/Crud");
const listar = async (req, res) => {
  const datos = await crud.listar();
  console.log(datos);
  return res.json(datos);
};

const add = async (req, res) => {
  const { nombre, apellidos, email, genero, ciudad } = req.body;
  const data = [nombre, apellidos, email, genero, ciudad];

  const add = await crud.add(data);
  return res.json({
    ok: true,
    message: "Dato ha sido agregado correctamente",
  });
};

const eliminar = async (req, res) => {
  const result = await crud.eliminar(req.params.id);
  return res.json({
    ok: true,
    message: "El dato ha sido eliminado correctamente",
  });
};

const actualizar = async (req, res) => {
  const { nombre, apellidos, email, genero, ciudad } = req.body;
  const data = [nombre, apellidos, email, genero, ciudad, req.params.id];

  const resultado = await crud.actualizar(data);
  return res.json({
    ok: true,
    message: "El dato ha sido actualizado correctamente",
  });
};

module.exports = {
  listar,
  add,
  eliminar,
  actualizar,
};
