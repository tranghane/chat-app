import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';

const app = express();
dotenv.config(); //allow using environment variable
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    //root route http://localhost:5000/
    res.send("Is this thing on?")
    // res.send("Hello?")
});

app.use("/api/auth", authRoutes)

app.listen(PORT, () => console.log(`Sever Running on port ${PORT}`));