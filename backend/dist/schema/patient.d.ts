import mongoose from 'mongoose';
interface IPatient extends Document {
    name: string;
    password: string;
    phone: string;
    dob: Date;
    age: number;
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