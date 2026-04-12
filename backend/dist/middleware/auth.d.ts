import type { Request, Response, NextFunction } from "express";
export interface AuthRequest extends Request {
    user: {
        id: string;
        role: string;
    };
}
export declare const authMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=auth.d.ts.map