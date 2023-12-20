const { connect } = require("mongoose");
const Food = require("./models/Food");
const dummyMeals = require("./lib/dummyMeals");

const populateMeals = async (req, res) => {
  await connect(
    "mongodb+srv://mahmoudsalah11350:KoZQfqR1fhH9xcxx@cluster0.2enbahb.mongodb.net/"
  );
  await Food.deleteMany();
  await Food.create(dummyMeals);
  console.log("dummy meals created");
};

populateMeals();
