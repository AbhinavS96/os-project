const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({
    "project status": "testing",
    team: ["Abhinav", "Soniya", "Miriam", "Missing Mass"],
  });
});

app.listen(3000, () => {
  console.log("running on port 3000");
});
