import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodrouter from "./routers/foodrouter.js";
import userRouter from "./routers/userroute.js";
import cartRouter from './routers/cartroute.js';
import 'dotenv/config.js'
import ordermodel from "./models/ordermodel.js";
import orderRouter from "./routers/orderroute.js";


const app = express()
const port = 4000

// Middleware
app.use(express.json())
app.use(cors())

//// db connection
connectDB();

//// api endpoints

app.use("/api/food",foodrouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use(express.json()); // ✅ Cho phép đọc req.body (JSON)
app.use("/api/order",orderRouter)





// Route
app.get("/", (req, res) => {
    res.send("API Working")
});

// Start Server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

