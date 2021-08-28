const express = require("express");
const multer = require("multer");
const serveIndex = require("serve-index");
const port = process.env.port || 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // name folder upload
    cb(null, "../ftp");
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, originalname);
  },
});

const upload = multer({ storage });

const app = express();
// app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use(
  "/ftp",
  express.static("../ftp"),
  serveIndex("../ftp", { icons: true })
);

// name link upload
app.post("/Download", upload.array("files", 12), (req, res) => {
  //   return res.json("status: Success");
  return res.send(
    '<script>alert("File Berhasil di Upload"); window.location.href="/ftp"</script>'
  );
});

app.listen(port, () => console.log(`Server Running ${port}`));

// app.use(
//     "/Download",
//     express.static("../storage/shared/Download"),
//     serveIndex("../storage/shared/Download", { icons: true })
//   );
