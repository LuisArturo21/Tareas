import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    rol: { type: String, default: "usuario" }
});

export default mongoose.model("User", UserSchema);
