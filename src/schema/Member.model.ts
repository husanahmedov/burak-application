import mongoose, { Schema, STATES } from "mongoose";

import { memberType, memberStatus } from "../lib/enum/member.enum";

const memberSchema = new Schema(
  {
    memberType: {
      type: String,
      enum: memberType,
      default: memberType.USER,
    },

    memberStatus: {
      type: String,
      enum: memberStatus,
      default: memberStatus.ACTIVE,
    },

    memberNick: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },

    memberPhone: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },

    memberPassword: {
      type: String,
      select: false,
      required: true,
    },

    memberPoints: {
      type: Number,
      default: 0,
      required: true,
    },

    memberAddress: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Member", memberSchema);
