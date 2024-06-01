import AttendanceModel from "../models/AttendanceModel.js";

export async function getAllAttHistory(req, res) {
  const allAtt = await AttendanceModel.find();
  res.send(allAtt);
}

export async function searchAttHistory(req, res) {
  const search = req.query.idDate;
  const dataAttHistory = await AttendanceModel.find();
  const att = dataAttHistory.filter((item) => {
    return item.idDate == search;
  });
  res.status(200).json({
    status: "success",
    data: att,
    message: `Tìm thấy ${att.length} kết quả`,
  });
}

export async function addAttendanceHistory(req, res) {
  const { idClass, nameClass, history, idDate } = req.body;

  AttendanceModel.create({
    idClass,
    nameClass,
    history,
    idDate,
  })
    .then((data) => {
      console.log("Thêm lịch sử điểm danh thành công!");
      res.status(200).json({
        status: "success",
        data: data,
        message: "Thêm lịch sử điểm danh thành công!",
      });
    })
    .catch((err) => {
      console.log("Có lỗi xảy ra: " + err);
      res.status(500).json({
        status: "Error",
        data: [],
        message: `Internal Server Error ${err}`,
      });
    });
}
