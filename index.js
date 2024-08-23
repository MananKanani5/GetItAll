const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

const getLinks = require("./service");

// Middleware Connections
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/download", async (req, res) => {
  const { url } = req.body;
  try {
    const result = await getLinks(url);
    const videoLink = result.links[1].link;
    res.redirect(videoLink);
  } catch (error) {
    res.status(500).send("Error processing request");
  }
});

// Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App running in port: " + PORT);
});
