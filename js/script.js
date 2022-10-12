var details = document.getElementById("details");
var bg = document.querySelector(".bg-holder");
const anydesk =
  "https://filehippo.com/download_anydesk/6.2.1/post_download/";
const teamviewer = "https://download.teamviewer.com/full";
const awesun =
  "https://down.aweray.com/awesun/windows/Aweray_Remote_2.0.0.45399_x64.exe";
const ultraviewer =
  "https://www.ultraviewer.net/en/UltraViewer_setup_6.5_en.exe";

const teamMAC = "https://download.teamviewer.com/download/TeamViewer.dmg";
const anydeskMAC =
  "https://filehippo.com/mac/download_anydesk/post_download/";
const awesunMAC = "https://download.aweray.com/awesun/mac/AweSun.dmg";
const supremo =
  "https://www.nanosystems.it/public/download/macOS/Supremo.dmg?_ga=2.191773481.2092645954.1662902073-999561274.1662902073";
const teamApk = "https://download.teamviewer.com/download/TeamViewer.apk";
const anydeskApk =
  "https://filehippo.com/android/download_anydesk/post_download/";
const asunapk =
  "https://download.apkpure.com/b/APK/Y29tLmFzdW5fNDAxMDBfOWY0YmYzMWE?_fn=QXN1biBTb2xhcl92NC4xLjBfYXBrcHVyZS5jb20uYXBr&amp;as=8d85c2e503d9c99b40d5ec3fc02ac2c76346bfd8&amp;ai=-869183428&amp;at=1665580896&amp;_sa=ai%2Cat&amp;k=eb952061eee548bd1075f320c068a51163496260&amp;r=https%3A%2F%2Fm.apkpure.com%2Fasun-solar%2Fcom.asun&amp;_p=Y29tLmFzdW4&amp;c=1%7CBUSINESS%7CZGV2PUFzdW4lMjBTb2xhciZ0PWFwayZzPTk5OTgyMTEmdm49NC4xLjAmdmM9NDAxMDA";

const microRemoteAPK =
  "https://download.apkpure.com/b/APK/Y29tLmFuZHJvbW8uZGV2MjgzMzgxLmFwcDI5MTUzMl8xMDE1X2QyMzJmNGY5?_fn=TWljcm9jb250cm9sbGVyIHByb2dyYW1zX3YxLjBfYXBrcHVyZS5jb20uYXBr&amp;as=77dfb4ef37d20d0b7fa2a19f4cfaf6e86346c0c4&amp;ai=-869183428&amp;at=1665581132&amp;_sa=ai%2Cat&amp;k=1e583a5f7abbb2ab86009cfe11d8f1b36349634c&amp;r=https%3A%2F%2Fm.apkpure.com%2Fmicrocontroller-programs%2Fcom.andromo.dev283381.app291532&amp;_p=Y29tLmFuZHJvbW8uZGV2MjgzMzgxLmFwcDI5MTUzMg&amp;c=1%7CEDUCATION%7CZGV2PUZpcnN0ZWNoYXBwcyZ0PWFwayZzPTc2NjQ5NjYmdm49MS4wJnZjPTEwMTU";

function show(event) {
  // console.log(bg_curve.classList);
  console.log(details.classList);
  console.log(!details.classList.contains("showDetails"));
  if (!details.classList.contains("showDetails")) {
    event.innerHTML = "Read Less <span>&minus;</span>";
    // bg_curve.classList.add("bg-holder-newchange");
    // bg_curve.classList.remove("bg-holder-new");
  } else {
    event.innerHTML = "Read More <span>&plus;</span>";
    // bg_curve.classList.add("bg-holder-new");
    // bg_curve.classList.remove("bg-holder-newchange");
  }
  details.classList.toggle("showDetails");
  bg.classList.toggle("bg-holderchange");
}

function getDesktopSoftware(event) {
  let newWindow;
  const support = event.firstChild.innerText;
  if (support == "Support-1") {
    newWindow = open(anydesk, "_blank");
  } else if (support == "Support-2") {
    newWindow = open(teamviewer, "_blank");
  } else if (support == "Support-3") {
    newWindow = open(awesun, "_blank");
  } else if (support == "Support-4") {
    newWindow = open(ultraviewer, "_blank");
  }
  return false;
}

function getMACSoftware(event) {
  let newWindow;
  const support = event.childNodes[1].innerText;
  if (support == "Support-1") {
    newWindow = open(anydeskMAC, "_blank");
  } else if (support == "Support-2") {
    newWindow = open(teamMAC, "_blank");
  } else if (support == "Support-3") {
    newWindow = open(awesunMAC, "_blank");
  } else if (support == "Support-4") {
    newWindow = open(supremo, "_blank");
  }
  return false;
}

function getAndroidSoftware(event) {
  let newWindow;
  const support = event.firstChild.innerText;
  if (support == "Support-1") {
    newWindow = open(anydeskApk, "_blank");
  } else if (support == "Support-2") {
    newWindow = open(teamApk, "_blank");
  } else if (support == "Support-3") {
    newWindow = open(asunapk, "_blank");
  } else if (support == "Support-4") {
    newWindow = open(microRemoteAPK, "_blank");
  }
  return false;
}

window.onscroll = function () {
  mytopBtn(); // back to top button
};

function mytopBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top-button").style.display = "block";
  } else {
    document.getElementById("top-button").style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = "0";
}
