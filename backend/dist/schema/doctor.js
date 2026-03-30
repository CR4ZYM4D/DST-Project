import mongoose, { Schema, Types, Document } from 'mongoose';
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "Name"
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        default: "password"
    },
    license_no: {
        type: String,
        required: true,
        unique: true,
    },
    specialty: {
        type: String,
        required: true,
        default: "General surgeon"
    },
    address: {
        type: String,
        required: true,
        default: "Address"
    },
    fee: {
        type: Number,
        required: true,
        default: 500.00
    },
    working_hrs: {
        start: {
            type: String,
            required: true,
            default: "10:00"
        },
        end: {
            type: String,
            required: true,
            default: "5:00"
        }
    },
    patients: [{
            type: Schema.Types.ObjectId,
            ref: 'Patient'
        }],
    isVerified: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number
    }
}, {
    timestamps: true
});
export const Doctor = mongoose.model("Doctor", doctorSchema);
//# sourceMappingURL=doctor.js.map