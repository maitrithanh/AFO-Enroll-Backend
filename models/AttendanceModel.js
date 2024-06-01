import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema(
  {
    idClass: {
      type: Number,
      require: "Id lớp là bắt buộc!",
    },
    nameClass: {
      type: String,
      require: "Tên lớp là bắt buộc!",
    },
    idDate: {
      type: Number,
      require: "IdDate là bắt buộc!",
    },
    history: {
      type: Array,
      require: "Lịch sử điểm danh là bắt buộc!",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("AttendanceHistory", AttendanceSchema);
