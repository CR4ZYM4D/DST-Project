import mongoose, { Types, Document } from 'mongoose';
interface IDoctor extends Document {
    name: string;
    password: string;
    license_no: string;
    specialty: string;
    address: string;
    fee: number;
    working_hrs: {
        start: string;
        end: string;
    };
    patients: Types.ObjectId[];
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    rating: number;
}
export declare const Doctor: mongoose.Model<IDoctor, {}, {}, {}, mongoose.Document<unknown, {}, IDoctor, {}, mongoose.DefaultSchemaOptions> & IDoctor & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IDoctor>;
export {};
//# sourceMappingURL=doctor.d.ts.map