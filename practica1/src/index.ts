import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import authRoutes from "./routes/authRoutes";
import publicacionRoutes from "./routes/publicacionRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/publicaciones", publicacionRoutes);
app.use("/users", userRoutes );


connectDB();


app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
