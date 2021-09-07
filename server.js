const express = require("express");
const multer = require("multer");
const serveIndex = require("serve-index");
const port = process.env.port || 3000;
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // name folder upload
    cb(null, "../storage/downloads");
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, originalname);
  },
});

const upload = multer({ storage });

const app = express();
// app.use(express.static("public"));

app.set("views", path.join(__dirname,"/"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
 // res.sendFile(__dirname + "/index.html");
res.render("index");
});

app.use(
  "/Download",
  express.static("../storage/downloads"),
  serveIndex("../storage/downloads", { icons: true })
);

// name link upload
app.post("/Downloads", upload.array("files", 12), (req, res) => {
  //   return res.json("status: Success");
  return res.send(
    '<script>alert("File Berhasil di Upload"); window.location.href="/Download"</script>'
  );
});

app.listen(port, () => console.log(`Server Running ${port}`));

