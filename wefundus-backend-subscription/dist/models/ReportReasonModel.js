"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const reportreasonSchema = new mongoose_1.Schema({
    categoryId: {
        type: mongoose_1.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });
const ReportReasonModel = (0, mongoose_1.model)('ReportReason', reportreasonSchema);
exports.default = ReportReasonModel;
