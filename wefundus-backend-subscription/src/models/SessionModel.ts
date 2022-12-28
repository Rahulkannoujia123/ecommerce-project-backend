import { Schema, model, Types } from 'mongoose';

const sessionSchema = new Schema({
    user: {
        type: Types.ObjectId,
        required: true,
        ref: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    deviceType: {
        type: String,
    },
    deviceToken: {
        type: String,
    },
    deviceId: {
        type: String
    },
    deviceName: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{ timestamps: true });

const SessionModel = model('session', sessionSchema);

export default SessionModel;