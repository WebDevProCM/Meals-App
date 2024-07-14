const mongoose = require("mongoose");

const likesSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"meals",
        required: true
    },
});

export default mongoose.models.likes || mongoose.model("likes", likesSchema);