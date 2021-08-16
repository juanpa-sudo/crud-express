const express = require("express");
const app = express();
const port = 4000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use("/home", require("./routes/rutas"));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
