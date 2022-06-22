const express = require("express");
const app = express();
const mainRouter = require("./routers/main");

const path = require("path");

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Servidor funcionando");
});

app.use("/", mainRouter);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
