const express = require("express");
const {
  listar,
  add,
  eliminar,
  actualizar,
} = require("../Controller/CrudController");
const router = express.Router();

router.get("/listar", listar);
router.post("/add/", add);
router.delete("/eliminar/:id", eliminar);
router.put("/actualizar/:id", actualizar);

module.exports = router;
