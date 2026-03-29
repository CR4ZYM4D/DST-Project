import type { Request, Response, NextFunction } from "express";
import { Patient } from "../schema/patient.js";
import { TryCatch } from "../middleware/error.js";

export const login = TryCatch(
                    async (req: Request, 
                        res: Response, 
                        next: NextFunction)  => {
                
                            const{phone, password} = req.body
                            const user = await Patient.create({
                                    phone: phone, 
                                    password: password
                                }
                            )
                            res.status(200).json(
                                {success: true}
                            )                            
                        }              
                    ) 