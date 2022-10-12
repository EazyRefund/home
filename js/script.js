var details = document.getElementById("details");
var bg = document.querySelector(".bg-holder");
const anydesk =
  "https://dw.uptodown.com/dwn/QBefmQ5rlkj9YPlBAMlkkaquqoxdcMmmkWMTSp6SANsU4sGpzO_oP1STdKrhXI4-D7mmf-Y8TJAMiKaiHoJdJZSsmIDQFn_SRBw96MnqcPssDKbC8NPalP31iJvDKMKU/IjFp1TtkXj6DLAIWmxxB9AbygCrAzqEzf3RtesOPgmdsQ57D4WBRdsX7soQYYvS7iSU3m0mF8e4mIZOJIwmegmA-SIbQEQi4ucJuCs6ATK86T_MZZLbpEkL519YyCYAV/AyCQi3YTI_fpCcZF-mZoIwS2ixboAHBEWzf4UIxwdv6W6jYyHRrnAT7Q0sG55j28/";
const teamviewer = "https://download.teamviewer.com/full";
const awesun =
  "https://down.aweray.com/awesun/windows/Aweray_Remote_2.0.0.45399_x64.exe";
const ultraviewer =
  "https://www.ultraviewer.net/en/UltraViewer_setup_6.5_en.exe";

const teamMAC = "https://download.teamviewer.com/download/TeamViewer.dmg";
const anydeskMAC =
  "https://dw.uptodown.com/dwn/eYv_yTmMIPOdBFp9fgsLnbZHpIALTmplKPake0X-K9y1b9wLRYB7_tQdIWzHou4QrgpQzV4Yr-zHP9gm9VTJ6qzZW9JSRAZw3odGGrH90IlsLdMPyXp7n-9FE8JzCei2/kyEZSyg7JgZEHiccR3NDjSiKpkouKSCGgo2rWtbK-KTg5-ANRit2CeiaiUfWhuRva3bk444V5nlnTKikP-WWNHnu9azPdF1A-Co0soPMczPPlllICNtPBeRf46WL1kVb/6OnWAotawqfn28TnP0JN32Sx2qQZjyAz1TTphWM6Hg2huivHN8bpyVcl_d8xF9z-/";
const awesunMAC = "https://download.aweray.com/awesun/mac/AweSun.dmg";
const supremo =
  "https://www.nanosystems.it/public/download/macOS/Supremo.dmg?_ga=2.191773481.2092645954.1662902073-999561274.1662902073";
const teamApk = "https://download.teamviewer.com/download/TeamViewer.apk";
const anydeskApk =
  "https://dw.uptodown.com/dwn/QBefmQ5rlkj9YPlBAMlkkaquqoxdcMmmkWMTSp6SANskoQhOlVSyiTKLlKsj37nSnKwdTZ8qnYdYeL2d4xbXzEiF3LWD6qyyR76N94zpaQeIeI2GSAOGklJpfShMrmho/AG-f2MxE8UuQjFqa57d0IMhLiDQZnRdf7ZT5NOubfOKlFPF9-U4vAymi2jx8y18rhfHYg5HtIgAsoF9mX9PdkqLH9t8aE8De2b3mbUMNJjgy6mR1QjjRlXZRMGJCP0TH/3RksoqQAdNEaYnPDDkVgAh8I702uh5FLkKyoEL0OQtP8dPlScGiI3UqjzzNojliSQxY1xYjxt-y5JjRiopoywA==/";
const asunapk =
  "https://dw.uptodown.com/dwn/eYv_yTmMIPOdBFp9fgsLnbZHpIALTmplKPake0X-K9z_9mldbrf_XIBcd2i0Lo2PSit45J0tVfMirvOSUyjwCtOMK2Wi2qBAWbZUttxFmEf7esEHOU-ClF6SQfCA93ZN/34zAiX7EFcH1XyTg9zBvliFZ1WuwNqbiz1hvUXGcljk2Q6G5FqoVzk-XpXl0ZMroE5IJ6a4vz5iWvjbJH9GutCopPBKyjaX9gSWXKU9KsieB26hHA69WpfDzOUeos-xW/mbvGW8N9m0yPY1gNuJPuHR8yp_YOQplLUp_deLMMiZodw_QiMXTtCnfS5pliBAaqTHFzCivqfzDw7K-4mtLMHw==/";

const microRemoteAPK =
  "https://dw.uptodown.com/dwn/eYv_yTmMIPOdBFp9fgsLnbZHpIALTmplKPake0X-K9zbho0XrlYSFxijxmn7TA6InB1peHanNTm3JdBSOfI3WDn_-r-r52d0gsxU37SNPiG4S3iqTaQVZYJBSWItlSNC/jILrdS093Uc8vUhTcIWRpy_poGPXCdec0j53-NKIKKlVbnRMxQx7yemmw6BSzGOXzaZ7ZiPb-HQbLD8_67jQ1vVlbWCXe_MuwH3tAXKivEEms6y_Lslr_HBi52N8sRcF/Mr4oy2kulW2eqNZVprwehZ9nqhvf4xHSQNDV6cI1WwJ5qGZyAtf2hhw9mn9dc3JV4QWPMrmFoxnXhrHOOR6djUWLWneMnwsH9fgGip0a2U1rc7nJGC355jkUjGuT3POg/";

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
