import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/transactions", async (req, res) => {
    try{
        const transactions = await Transaction.find()
            .limit(50)
            .sort({ createdOn: -1 });
        res.status(200).json(transactions); // grabbing data from DB and sending it to frontend with 200 status (success)
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
})

export default router;