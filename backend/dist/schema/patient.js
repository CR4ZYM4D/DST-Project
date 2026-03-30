import mongoose from 'mongoose';
import validator from 'validator';
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "Name"
    },
    password: {
        type: String,
        required: true,
        default: "password"
    },
    phone: {
        type: String,
        required: [true, 'please enter phone number'],
        validate: validator.default.isMobilePhone
    },
    dob: {
        type: Date,
        required: true,
        default: Date.now
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other'],
        default: "male"
    },
    is_veg: {
        type: Boolean,
        required: true,
        default: true
    },
    allergens: {
        type: [String],
        default: []
    },
    medical_history: {
        type: [String],
        default: []
    },
    appointment_history: {
        type: [String],
        default: []
    }
}, { timestamps: true });
patientSchema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth())
        age--;
    return age;
});
export const Patient = mongoose.model("Patient", patientSchema);
//# sourceMappingURL=patient.js.map