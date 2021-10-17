require("dotenv").config({ path: "./config.env" });

const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors");
const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening At ${PORT}`));
