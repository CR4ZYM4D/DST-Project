import mongoose, { Document, Schema, Types } from 'mongoose';
const apptSchema = new mongoose.Schema({
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
}, { timestamps: true });
apptSchema.virtual("hasOccurred").get(function () {
    const today = new Date();
    const apptDate = this.date;
    if (apptDate.getDate() <= today.getDate() &&
        apptDate.getMonth() <= today.getMonth() &&
        apptDate.getFullYear() <= today.getFullYear())
        return true;
    return false;
});
export const Appointment = mongoose.model("Appointment", apptSchema);
//# sourceMappingURL=appointment.js.map