const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

app.use(cors());

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("resume"), (req, res) => {
    console.log("Upload route called");
    console.log(req.file);

    res.json({
        message: "Resume uploaded successfully!",
        file: req.file.filename,
    });
});

app.get("/test", (req, res) => {
  res.send("Test route working");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});