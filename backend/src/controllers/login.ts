import type { Request, Response, NextFunction } from "express";
import { Patient } from "../schema/patient.js";

export const login = async (req: Request, 
                    res: Response, 
                    next: NextFunction)  => {

                        try{
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
                        catch (error){
                            res.status(500).json({
                                success: false,
                                message: error
                            })
                        }

                    } 