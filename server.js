const Sequelize = require("sequelize");
const path = require("path");
const express = require("express");
const routes = require("./routes/routes");
const app = express();
const PORT = process.env.PORT || 3001;

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3001,
    }
  );
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

app.listen(PORT, () => console.log("Now listening"));
