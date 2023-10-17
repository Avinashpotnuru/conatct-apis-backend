const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connect"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/", require("./routes/contact"));

app.listen(process.env.port || 4000, () =>
  console.log("your server is started")
);
