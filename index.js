const express = require("express");
var cors = require("cors");
const verifyDb = require("./db/verifyDb.js");

const app = express();
const port = process.env.PORT || 3000;

verifyDb();
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

const route = require("./routes/route.js");
app.use("", route);

app.get("/*", cors(corsOptions), (req, res, next) => {
  res.json("this is enable for all origins");
});

app.listen(port, () => console.log(`App runing in http://localhost:${port}`));
