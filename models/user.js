import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        contactNumber: {
            type: String,
            required: true
        },
        country: {
            type: String
        },
        role: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            required: true
        }
    },
    {timestamps: true}
)

export default mongoose.model("User", UserSchema)