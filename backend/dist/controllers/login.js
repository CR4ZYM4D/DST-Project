import { TryCatch } from "../middleware/error.js";
import validator from 'validator';
import { Doctor } from "../schema/doctor.js";
import { Patient } from "../schema/patient.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
    path: path.resolve(__dirname, "../../.env")
});
console.log(process.env.JWT_SECRET);
export const login = TryCatch(async (req, res, next) => {
    const { id, password } = req.body;
    let user;
    if (validator.isEmail(id) && id !== "admin@gmail.com") {
        user = await Doctor.findOne({ email: id });
    }
    else {
        user = await Patient.findOne({ phone: id });
    }
    if (!user) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(400).json({ message: "Invalid credentials" });
        return;
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
    res.status(200).json({
        success: true
    });
});
//# sourceMappingURL=login.js.map