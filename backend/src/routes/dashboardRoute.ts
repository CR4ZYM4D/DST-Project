import express from "express"
import {authMiddleware} from "../middleware/auth.js"
import type { AuthRequest } from "../middleware/auth.js"
import doctorDashboard from "../controllers/doctorDashboard.js"
import {Patient} from "../schema/patient.js"


const router = express.Router()

// patient
router.get("/patient", authMiddleware, async (req: Request, res) => {

    if (req.user.role !== "patient") {
        return res.status(403).json({ message: "Access denied" })
    }

    const patient = await Patient.findById(req.user.id)

    if(!patient){
        return res.status(403).json({ message: "Access denied" })
    }

    res.json(patient)
})

// doctor
router.get("/doctor", doctorDashboard)

export default router