import { Schema, model } from 'mongoose';
import { ColorInterface } from '../interfaces/ColorInterface';

const colorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    code: {
        type: String,
        required: true,
        trim: true,
        maxlength: 7,
        minlength: 7
    },
}, { timestamps: true });

colorSchema.index({ name: 1 }, { unique: true });
colorSchema.index({ code: 1 }, { unique: true });

const ColorModel = model<ColorInterface>('color', colorSchema);
export default ColorModel;

