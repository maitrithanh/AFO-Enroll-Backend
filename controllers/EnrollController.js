import EnrollModel from "../models/EnrollModel.js";

export async function getEnroll(req, res) {
  const enroll = await EnrollModel.find();
  res.send(enroll);
}

export async function searchEnroll(req, res) {
  const search = req.query.phone;
  const dataEnroll = await EnrollModel.find();
  const enroll = dataEnroll.filter((item) => {
    return item.phoneNumber == search;
  });
  res.status(200).json({
    status: "success",
    data: enroll,
    message: `Tìm thấy ${enroll.length} kết quả`,
  });
}

export async function addEnroll(req, res) {
  const { fullNameParent, fullNameChild, phoneNumber, level, email } = req.body;

  EnrollModel.create({
    fullNameParent,
    fullNameChild,
    phoneNumber,
    level,
    email,
  })
    .then((data) => {
      console.log("Thêm mới thành công.");
      res.status(200).json({
        status: "success",
        data: data,
        message: "Thêm mới thành công.",
      });
    })
    .catch((err) => {
      console.log("Có lỗi: ", err);
      res.status(500).json({
        status: "error",
        data: [],
        message: `Internal Server Error ${err}`,
      });
    });
}

export async function updateStatusEnroll(req, res) {
  const { _id } = req.body;
  EnrollModel.findByIdAndUpdate(_id, { status: true })
    .then((data) =>
      res.status(200).json({
        status: "success",
        message: "Cập nhật trạng thái thành công.",
      })
    )
    .catch((err) => res.status(500).json({ status: "error", message: err }));
}
