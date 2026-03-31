import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import { Doctor } from "../schema/doctor.js";
import { Patient } from "../schema/patient.js";
const router = express.Router();
// patient
router.get("/patient", authMiddleware, async (req, res) => {
    if (req.user.role !== "patient") {
        return res.status(403).json({ message: "Access denied" });
    }
    const patient = await Patient.findById(req.user.id);
    res.json(patient);
});
// doctor
router.get("/doctor", authMiddleware, async (req, res) => {
    if (req.user.role !== "doctor") {
        return res.status(403).json({ message: "Access denied" });
    }
    const doctor = await Doctor.findById(req.user.id);
    res.json(doctor);
});
export default router;
//# sourceMappingURL=dashboardRoute.js.map