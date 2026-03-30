import { type Response, type Request, type NextFunction } from 'express';
import type ErrorHandler from '../utils/utility-class.js';
import type { ControllerType } from '../types/types.js';
export declare const errorMiddleware: (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => void;
export declare const TryCatch: (func: ControllerType) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=error.d.ts.map