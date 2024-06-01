import mongoose from "mongoose";

const enrollSchema = new mongoose.Schema(
  {
    fullNameParent: {
      type: String,
      required: "Họ tên phụ huynh là bắt buộc!",
      max: 25,
    },
    fullNameChild: {
      type: String,
      required: "Họ tên trẻ là là bắt buộc!",
      unique: true,
      max: 25,
    },
    phoneNumber: {
      type: String,
      require: true,
      max: 10,
    },
    level: {
      type: String,
      require: "Bậc học là bắt buộc!",
    },
    email: {
      type: String,
      required: "Địa chỉ Email là bắt buộc!",
      lowercase: true,
      trim: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Enroll", enrollSchema);
