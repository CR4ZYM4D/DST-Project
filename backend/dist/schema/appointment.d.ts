import mongoose, { Document, Types } from 'mongoose';
interface IAppt extends Document {
    doctor: Types.ObjectId;
    patient: Types.ObjectId;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
    notes: string;
    hasOccurred: boolean;
}
export declare const Appointment: mongoose.Model<IAppt, {}, {}, {}, mongoose.Document<unknown, {}, IAppt, {}, mongoose.DefaultSchemaOptions> & IAppt & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IAppt>;
export {};
//# sourceMappingURL=appointment.d.ts.map