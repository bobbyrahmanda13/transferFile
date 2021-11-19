const uploadForms = document.getElementById("uploadForm");
const inpFile = document.getElementById("files");
const btnUploaded = document.querySelector(".btnUpload");
const progressBarCont = document.querySelector(".progress-bar");
const progressBarFill = document.querySelector(
  "#progressBar > .progress-bar-fil"
);
const progressBarText =
  progressBarFill.querySelector(".progress-bar-text");

uploadForms.addEventListener("submit", uploadFile);

function uploadFile() {
  const xhr = new XMLHttpRequest();

  xhr.upload.onloadstart = function (e) {
    progressBarCont.classList.remove("dnone");
    // btnUploaded.classList.add("dnone");
    btnUploaded.disabled = "disabled";
    btnUploaded.value = "Send Data";
    btnUploaded.classList.add("send");
  };

  xhr.upload.onprogress = (e) => {
    const percent = e.lengthComputable ? (e.loaded / e.total) * 100 : 0;
    progressBarFill.style.width = percent.toFixed(2) + "%";
    progressBarText.textContent = percent.toFixed(2) + "%";
    // console.log(e);
  };

  xhr.upload.onloadend = (e) => {
    progressBarCont.classList.add("dnone");          
  };

  xhr.onerror = function (e) {
    alert("Error");
    //console.log(e);
  };
  xhr.onload = function (e) {
    if(e.currentTarget.status < 400){
      alert("File Berhasil Di Upload");
  } else {
      alert("Gagal Upload Coba Lagi");
  };
  };

  xhr.open("POST", "/Downloads");
  xhr.send(new FormData(uploadForms));
}