const mongoose = require("mongoose");
const validator = require("validator")

const mealSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    summary: {
        type: String,
        trim: true,
        required: true
    },
    instructions: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        default: "noMealImage.jpg",
        trim: true
    },
    user: {
        type: String,
        required: true
    }
});

export default mongoose.models.meals || mongoose.model("meals", mealSchema);