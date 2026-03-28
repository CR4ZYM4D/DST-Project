import { Patient } from "../schema/patient.js";
export const login = async (req, res, next) => {
    try {
        const { phone, password } = req.body;
        const user = await Patient.create({
            phone: phone,
            password: password
        });
        res.status(200).json({ success: true });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error
        });
    }
};
//# sourceMappingURL=login.js.map