const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/random", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );

    const drink = response.data.drinks[0];
    res.render("cocktail", { drink });

  } catch (error) {
    console.error(error);
    res.send("Error fetching cocktail data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
