import Express from "express";
import KPI from "../models/KPI.js";

const router = express.router();

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
