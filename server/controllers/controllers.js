import { start } from "../db/connect";
import Food from "../models/Food";
start();

export const getAllFoods = async (req, res) => {
  const foods = await Food.find();
  return foods;
};

export const getMeal = async (mealId) => {
  const meal = await Food.findOne({ _id: mealId });
  if (!meal) {
    console.log("no meal");
    throw new Error("no meal");
  }
  return meal;
};

export const createMeal = async (meal) => {
  const newMeal = await Food.create(meal);
  return newMeal;
};
