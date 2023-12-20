const { connect } = require("mongoose");
const Food = require("./models/Food");
const dummyMeals = require("./lib/dummyMeals");

const populateMeals = async (req, res) => {
  await connect("mongodb://127.0.0.1:27017/foodies");
  await Food.deleteMany();
  await Food.create(dummyMeals);
  console.log("dummy meals created");
};

populateMeals();
