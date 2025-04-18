const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, lowercase: true },
  calories: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("マイナスのカロリーは存在しないよ");
    },
  },
});

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;
