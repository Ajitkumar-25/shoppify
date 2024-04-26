const PORT = 5000;
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("Hello from server");
});

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, resp) => {
  //   console.log(req.file);
  resp.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});

app.use("/", require("./Routes/productroutes"));

app.listen(PORT, (req, resp) => {
  console.log(`Server is running on port ${PORT}`);
});

//Database connection
const connectToMongo = require("./Database/db");
connectToMongo();
