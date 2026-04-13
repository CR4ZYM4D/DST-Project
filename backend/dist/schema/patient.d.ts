import mongoose from 'mongoose';
interface IPatient extends Document {
    name: string;
    password: string;
    indexNo: number;
    phone: string;
    dob: Date;
    age: number;
    bloodGroup: string;
    isVeg: boolean;
    appointmentHistory: [];
    medicalHistory: [];
    allergens: [];
    reports: [
        {
            tile: string;
            fileUrl: string;
            createdAt: Date;
        }
    ];
    gender: "male" | "female" | "other";
    createdAt: Date;
    updatedAt: Date;
}
export declare const Patient: mongoose.Model<IPatient, {}, {}, {}, mongoose.Document<unknown, {}, IPatient, {}, mongoose.DefaultSchemaOptions> & IPatient & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IPatient>;
export {};
//# sourceMappingURL=patient.d.ts.map