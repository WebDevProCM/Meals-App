import mongoose from "mongoose"
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: [true, "Email address already exists!"],
        validate: (email) =>{
            if(!validator.isEmail(email)){
                throw new Error("invalid email");
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: 8
    },
    image: {
        type: String,
        default: "noImage.jpg",
        trim: true
    }
});

userSchema.statics.sendPublicData = (user) =>{
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        image: user.image
    }
}

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;