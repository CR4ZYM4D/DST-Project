import mongoose, { Schema, Types, Document } from 'mongoose'

interface IDoctor extends Document{

    name: string,
    password: string,
    license_no: string,
    specialty: string,
    address: string,
    fee: number,
    working_hrs: {
        start: string
        end: string
    }
    patients: Types.ObjectId[],
    isVerified: boolean,
    createdAt: Date,
    updatedAt: Date,
    rating: number

}

const doctorSchema = new mongoose.Schema(

    {
        name: {
            type: String, 
            required: true
        },

        password: {
            type: String,
            required: true
        },

        license_no: {
            type: String,
            required: true,
            unique: true
        },

        specialty: {
            type: String,
            required: true
        },

        address: {
            type: String,
            required: true
        },

        fee: {
            type: Number,
            required: true
        },

        working_hrs: {
            start: {
                type: String,
                required: true
            },
            end: {
                type: String,
                required: true
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

    },

    {
        timestamps: true
    }

)

export const Doctor = mongoose.model<IDoctor>("Doctor", doctorSchema)