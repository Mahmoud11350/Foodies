const { model, models, Schema } = require("mongoose");

const foodSchema = new Schema({
  title: {
    type: String,
    required: [true, "meal name can't be empty"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "meal image can't be empty"],
    trim: true,
  },
  summary: {
    type: String,
    required: [true, "meal summary can't be empty"],
    trim: true,
  },
  creator: {
    type: String,
    required: [true, "meal creator can't be empty"],
    trim: true,
  },
  creator_email: {
    type: String,
    required: [true, "creator email can't be empty"],
    trim: true,
  },
  instructions: {
    type: String,
  },
});

module.exports = models.Food || model("Food", foodSchema);
