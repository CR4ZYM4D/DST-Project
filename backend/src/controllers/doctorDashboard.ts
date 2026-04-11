import type { Request, Response, NextFunction } from "express"
import { TryCatch } from "../middleware/error.js"
import { Doctor } from "../schema/doctor.js"
import { Appointment } from "../schema/appointment.js"
import { Activity } from "../schema/activity.js"
import { Analysis } from "../schema/analysis.js"
import type { AuthRequest } from "../middleware/auth.js"



const doctorDashboard = TryCatch(async (req: Request, res: Response, next: NextFunction) => {

    let authReq = req as AuthRequest

    if (!authReq.user || authReq.user.role !== "doctor") {
        res.status(403).json({ message: "Access denied" })         
        return
    }

    const doctor = await Doctor.findById(authReq.user.id)

    if(!doctor){
        res.status(403).json({ message: "Access denied" })
        return
    }

    // Fetch stats
    const totalPatients = doctor.patients? doctor.patients.length : 0
    const activeCases = await Appointment.countDocuments({ doctor: doctor._id, date: { $gt: new Date() } })
    const aiAnalyses = await Analysis.countDocuments({ doctor: doctor._id })

    // Fetch activity 
    let activityFeed = await Activity.find({ doctor: doctor._id }).sort({ createdAt: -1 }).limit(10).lean()
    if(!activityFeed || activityFeed.length == 0){
        activityFeed = []
    }

    // const alerts = await Alert.find({ doctor: doctor._id, priority: { $in: ['critical', 'high'] }, resolved: false }).sort({ createdAt: -1 }).limit(5).lean()

    res.json({
        doctor: doctor,
        stats: {
            totalPatients,
            activeCases,
            //criticalAlerts,
            aiAnalyses
        },
        activityFeed: activityFeed.map(item => ({
            id: item._id,
            title: item.title,
            description: item.description,
            time: item.createdAt.toISOString(), // Or format as relative time if needed
            type: item.type
        })),
        // alerts: alerts.map(alert => ({
        //     id: alert._id,
        //     title: alert.title,
        //     description: alert.description,
        //     patientId: alert.patient,
        //     priority: alert.priority
        // }))
    })
}
)
    
export default doctorDashboard