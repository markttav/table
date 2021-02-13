const express = require("express");
const chance = require("chance").Chance();
const shuffleArray = require("shuffle-array");
const router = express.Router();

const data = {
  rows: new Array(25).fill(undefined).map((e, i) => {
    return {
      key: i,
      name: chance.name(),
      age: chance.age(),
      adress: chance.address(),
      city: chance.city(),
      pet: chance.animal(),
    };
  }),
};

router.get("/data", (req, res) => {
  res.json({
    rows: shuffleArray(data.rows),
  });
});

module.exports = router;
