import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/products", async (req, res) => {
    try{
        const products = await Product.find();
        // Any data transformation of incoming data done here
        res.status(200).json(products); // grabbing data from DB and sending it to frontend with 200 status (success)
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
})

export default router;