import express from "express"
import { placeOrder, userOders, verifyOrder,listOrders,updateStatus } from "../controllers/ordercontrollers.js";
import authMiddleware from "../middleware/auth.js"; 

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authMiddleware,userOders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)
export default orderRouter;

