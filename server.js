const express = require("express");
const multer = require("multer");
const serveIndex = require("serve-index");
const bodyParser = require("body-parser");
const port = process.env.port || 3000;
const path = require("path");
let ip = require("ip");

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
app.use(express.static("views"));


// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 

app.set("views", path.join(__dirname,"views"));
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

// name link upload // files = name => input (html)
app.post("/Downloads", upload.array("files", 100), (req, res) => {
  //   return res.json("status: Success");
  return res.send(
    '<script>alert("File Berhasil Di Upload"); window.location.href="/";</script>'
   
  );
});

app.listen(port, () => console.log(`Server Running http://${ip.address()}:${port}`));

