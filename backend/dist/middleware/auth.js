import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { TryCatch } from "./error.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
    path: path.resolve(__dirname, "../../.env")
});
export const authMiddleware = TryCatch(async (req, res, next) => {
    const token = req.cookies.token;
    let authReq = req;
    if (!token) {
        res.status(401).json({ message: "Not authenticated" });
        return;
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    authReq.user = decoded;
    return next();
});
//# sourceMappingURL=auth.js.map