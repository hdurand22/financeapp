import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
    try{
        const kpis = await KPI.find();
        res.status(200).json(kpis); // grabbing data from DB and sending it to frontend with 200 status (success)
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
})

export default router;