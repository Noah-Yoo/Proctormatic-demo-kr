var selectedClass;
var timeout;

function setStep(testStep, testVerifying) {
  let step;
  switch (testStep) {
    case "beforeStart": // 진행예정
      step = "진행 전";
      break;
    case "beforeAnalysis":
      step = "검증 대기 중";
      break;
    case "analyzing":
      step = "검증 중 (" + testVerifying + "%)";
      break;
    case "afterAnalysis":
      step = "검증 완료";
      break;
    case "afterSendMail":
      step = "검증 완료";
      break;
    case "notProgress":
      step = "시험이 진행되지 않음";
      break;
    case "unusualOnly":
      step = "정상 응시 내역이 없음";
      break;
    default:
      step = "-";
      break;
  }
  return step;
}

function setReport(testStep) {
  let report;
  switch (testStep) {
    case "beforeStart": // 진행예정
      report = "-";
      break;
    case "beforeAnalysis":
      report = "작성 대기 중";
      break;
    case "analyzing":
      report = "작성 중";
      break;
    case "afterAnalysis":
      report = "작성 중";
      break;
    case "afterSendMail":
      report = "전달 완료";
      break;
    case "notProgress":
      report = "-";
      break;
    case "unusualOnly":
      report = "-";
      break;
    default:
      report = "-";
      break;
  }
  return report;
}

function writeTimeFormat(startTime, endTime, delimeter, TimeFormat) {
  let day = ['일', '월', '화', '수', '목', '금', '토'];
  let str = "";
  
  if(endTime === undefined) {
    let st = new Date(startTime);
    str += st.getFullYear() + "-";
    str += st.getMonth + 1 < 10 ? "0" + st.getMonth + 1 : st.getMonth + 1;
    str += "-";
    str += st.getDate() < 10 ? "0" + st.getDate() : st.getDate();
    str += " ";
    str += st.getHours() < 10 ? "0" + st.getHours() : st.getHours();
    str += ":";
    str += st.getMinutes() < 10 ? "0" + st.getMinutes() : st.getMinutes();
  } else if(TimeFormat === "hh:mm:ss A") {
    let st = new Date(startTime);
    let hour = st.getHours() > 12 ? st.getHours() - 12 : st.getHours();
    str += st.getHours() >= 12 ? "오후" : "오전";
    str += " ";
    str += hour < 10 ? "0" + hour : hour;
    str += ":";
    str += st.getMinutes() < 10 ? "0" + st.getMinutes() : st.getMinutes();
    str += ":";
    str += st.getSeconds() < 10 ? "0" + st.getSeconds() : st.getSeconds();
  } else if(TimeFormat === "A hh:mm") {
    let st = new Date(startTime);
    let hour = st.getHours() > 12 ? st.getHours() - 12 : st.getHours();
    str += st.getHours() >= 12 ? "오후" : "오전";
    str += " ";
    str += hour < 10 ? "0"+hour : hour;
    str += ":";
    str += st.getMinutes() < 10 ? "0"+st.getMinutes() : st.getMinutes();
  } else {
    let st = new Date(startTime);
    let et = new Date(endTime);
    let sHour = st.getHours() > 12 ? st.getHours() - 12 : st.getHours();
    let eHour = et.getHours() > 12 ? et.getHours() - 12 : st.getHours();
    str += st.getFullYear() + "-";
    str += st.getMonth + 1 < 10 ? "0" + st.getMonth + 1 : st.getMonth + 1;
    str += "-";
    str += st.getDate() < 10 ? "0" + st.getDate() : st.getDate();
    str += "(" + day[st.getDay()] + ") ";
    str += st.getHours() >= 12 ? "오후" : "오전";
    str += " ";
    str += sHour < 10 ? "0" + sHour : sHour;
    str += ":";
    str += st.getMinutes() < 10 ? "0" + st.getMinutes() : st.getMinutes();
    str += " ~ ";
    str += et.getHours() >= 12 ? "오후" : "오전";
    str += " ";
    str += eHour < 10 ? "0" + eHour : eHour;
    str += ":";
    str += et.getMinutes() < 10 ? "0" + et.getMinutes() : et.getMinutes();
  }
  return str;
}

function getShowState(check) {
  let str;
  if (check === "confirmStatus") {
    str = "확인 요망";
  } else if (check === "cautionStatus") {
    str = "주의 요망";
  } else if (check === "normalStatus") {
    str = "정상 응시";
  } else if (check === "errorStatus") {
    str = "분석 오류 발생";
  } else {
    str = "미완료";
  }
  return str;
}

// report 페이지
function drawChartList(List, Len) {
  if(Len > 0) {
    document.write("<div class='griding'>");
      for(var i = 0; i < Len; i++) {
        if(List[i].clickable === true) {
          document.write("<div id='ChartList' onclick=location.href='reportSpecific.html?"+location.href.split("?")[1]+"&"+List[i].index+"&false'>");
        } else {
          document.write("<div id='ChartList'>");
        }
        document.write("<div class='left'>");
          document.write("<span class='name'>");
            document.write(List[i].testerName);
          document.write("</span>");
          document.write("<div class='mobile'>");
            if (List[i].check === "confirmStatus") {
              document.write("<div class='normal urgent'>");
            } else if (List[i].check === "cautionStatus") {
              document.write("<div class='normal recommended'>");
            } else if (List[i].check === "normalStatus") {
              document.write("<div class='normal passed'>");
            } else {
              document.write("<div class='normal incomplete'>");
            }
            // document.write("<div class='normal'>");
              document.write(getShowState(List[i].check));
              if(List[i].abnormal || List[i].cheats) {
                document.write("<div class='grey'></div>");
                document.write("<div class='detect'>");
                if((List[i].cheats !== 0) & (List[i].check !== "errorStatus")) {
                  document.write("<div class='detectOne'>");
                    document.write("<div class='redButton'></div>");
                    document.write("<div>");
                      document.write(List[i].cheats);
                    document.write("</div>");
                  document.write("</div>");
                }
                if((List[i].abnormals !== 0) & (List[i].check !== "errorStatus")) {
                  document.write("<div class='detectTwo'>");
                    document.write("<div class='yellowButton'></div>");
                    document.write("<div>");
                      document.write(List[i].abnormals);
                    document.write("</div>");
                  document.write("</div>");
                }
                document.write("</div>");
              }
            document.write("</div>");
          document.write("</div>");
        document.write("</div>");
        document.write("<div class='num'>");
          if(List[i].check === "errorStatus" || List[i].check === "unusualStatus") {
            document.write("");
          } else {
            document.write(List[i].abnormals + List[i].cheats);
            document.write("<div class='small'>건</div>");
          }
        document.write("</div>");
        document.write("<div class='pc'>");
          if (List[i].check === "confirmStatus") {
            document.write("<div class='normal urgent'>");
          } else if (List[i].check === "cautionStatus") {
            document.write("<div class='normal recommended'>");
          } else if (List[i].check === "normalStatus") {
            document.write("<div class='normal passed'>");
          } else {
            document.write("<div class='normal incomplete'>");
          }
          // document.write("<div class='normal'>");
            document.write(getShowState(List[i].check));
          document.write("</div>");

          document.write("<div class='detect'>");
            if((List[i].abnormals || List[i].cheats) && List[i].check !== "errorStatus") {
              document.write("<div>");
                if(List[i].cheats !== 0) {
                  document.write("<div class='detectOne'>");
                    document.write("<div class='redButton'></div>");
                    document.write("<div>");
                      document.write(List[i].cheats);
                    document.write("</div>");
                  document.write("</div>");
                }
                if(List[i].abnormals !== 0) {
                  if(List[i].cheats !== 0) {
                    document.write("<div class='detectTwo marginLeft'>");
                  } else {
                    document.write("<div class='detectTwo'>");
                  }
                    document.write("<div class='yellowButton'></div>");
                    document.write("<div>");
                      document.write(List[i].abnormals);
                    document.write("</div>");
                  document.write("</div>");
                }
              document.write("</div>");
            }
          document.write("</div>");
        document.write("</div>");
        document.write("</div>");
      }
    document.write("</div>");
  } else {
    document.write("<div class='nothing'>");
      document.write("No test-takers");
    document.write("</div>");
  }
}

function setGraphUnit(videoLength) {
  let unit;
  if(videoLength <= 1800) {
    unit = 300;
  } else if(videoLength > 1800 || videoLength <= 3600) {
    unit = 600;
  } else {
    unit = 1800;
  }
  return unit;
}

function setColumnCount(videoLength, graphUnit) {
  let temp = [];
  for(let i = 0; i < Math.floor(videoLength / graphUnit) - 1; i++) {
    temp[i] = i;
  }
  return temp;
}

function setTableFillCount(length) {
  let temp = [];
  for (let i = 0; i < 4 - length; i++) {
    temp[i] = i;
  }
  return temp;
}

// video timeTable Action
function drawTimeTableAction(timetable) {
  
  timetable.map((value, index) => {
    document.write("<div class='StAction'\
      onclick='setActionOnclick("+value.startTime+","+value.endTime+","+index+",this);'\
      >");
      document.write("<div class='buckett'>");
        document.write("<span class='num'>");
          document.write(String(index + 1).padStart(2, "0"));
        document.write("</span>");
        document.write("<div class='upLine'>");
          document.write("<div class='action'>");
            if(value.detectedItem) {
              document.write(value.sort + " (" + Math.floor(value.endTime - value.startTime) + " sec) " + value.detectedItem);
            } else {
              document.write(value.sort + " (" + Math.floor(value.endTime - value.startTime) + " sec)");
            }
          document.write("</div>");
          document.write("<div class='downLine'>");
            if(value.level === "cheat") {
              document.write("<div class='evaluate cheat'>");
            } else if(value.level === "abnormal") {
              document.write("<div class='evaluate abnormal'>");
            } else {
              document.write("<div class='evaluate else'>");
            }
              if(value.level === "cheat") {
                document.write("부정행위");
              } else if(value.level === "abnormal") {
                document.write("이상행동");
              }
            document.write("</div>");
            document.write("<div class='greyBar'></div>");
            document.write("<div class='timess'>");
              document.write(value.timestamp);
            document.write("</div>");
          document.write("</div>");
        document.write("</div>");
      document.write("</div>");
    document.write("</div>");
  });
}

function setActionOnclick(startTime, endTime, index, action) {
  if(selectedClass) {
    let numNode = selectedClass.childNodes[0].childNodes[0];
    let actionNode = selectedClass.childNodes[0].childNodes[1].childNodes[0];
    selectedClass.classList.remove('clicked');
    actionNode.classList.remove('clicked');
    numNode.classList.remove('clicked');
  }
  let numNode = action.childNodes[0].childNodes[0];
  let actionNode = action.childNodes[0].childNodes[1].childNodes[0];
  action.classList.add('clicked');
  actionNode.classList.add('clicked');
  numNode.classList.add('clicked');
  document.getElementsByClassName("videoSharingButton")[0].classList.add("clicked");
  document.getElementsByClassName("videoSharingButton")[0].onclick = shareButtonClick;
  const myVideo = document.getElementById("video");
  setCurTime(startTime, myVideo);
  if(timeout) {
    clearTimeout(timeout);
  }
  setPauTime((endTime - startTime) * 1000, myVideo);
  selectedClass = action;
}

const setCurTime = (time, myVideo) => {
  myVideo.currentTime = time;
  myVideo.play();
};

const setPauTime = (endTime, myVideo) => {
  timeout = setTimeout(() => {
    myVideo.pause();
  }, endTime);
};

function setShow(element) {
  if(element.className.startsWith('viewall')) {
    element.classList.add("show");
    element.nextSibling.nextSibling.classList.remove("show");
    element.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove("show");
    document.getElementById("show1").style.removeProperty("display");
    document.getElementById("show2").style.setProperty("display", "none");
    document.getElementById("show3").style.setProperty("display", "none");
  } else if(element.className.startsWith('viewcheating')) {
    element.classList.add("show");
    element.previousSibling.previousSibling.classList.remove("show");
    element.nextSibling.nextSibling.classList.remove("show");
    document.getElementById("show1").style.setProperty("display", "none");
    document.getElementById("show2").style.removeProperty("display");
    document.getElementById("show3").style.setProperty("display", "none");
  } else if(element.className.startsWith('viewabnormal')) {
    element.classList.add("show");
    element.previousSibling.previousSibling.classList.remove("show");
    element.previousSibling.previousSibling.previousSibling.previousSibling.classList.remove("show");
    document.getElementById("show1").style.setProperty("display", "none");
    document.getElementById("show2").style.setProperty("display", "none");
    document.getElementById("show3").style.removeProperty("display");
  }
  if(selectedClass) {
    let numNode = selectedClass.childNodes[0].childNodes[0];
    let actionNode = selectedClass.childNodes[0].childNodes[1].childNodes[0];
    selectedClass.classList.remove('clicked');
    actionNode.classList.remove('clicked');
    numNode.classList.remove('clicked');
    document.getElementsByClassName("videoSharingButton")[0].classList.remove("clicked");
    document.getElementsByClassName("videoSharingButton")[0].onclick = null;
  }
  selectedClass = "";
}

function setEnvironmentFilter(showNum) {
  if(showNum === 1) {
    document.getElementById("retakeFilterItemOne").classList.add("show");
    document.getElementById("retakeFilterItemTwo").classList.remove("show");
    document.getElementById("envFilter1").style.removeProperty("display");
    document.getElementById("envFilter2").style.setProperty("display", "none");
    document.getElementById("envFilter2Count").style.setProperty("display", "none");
    document.getElementById("infoText").style.setProperty("display", "none");
  } else if(showNum === 2) {
    document.getElementById("retakeFilterItemOne").classList.remove("show");
    document.getElementById("retakeFilterItemTwo").classList.add("show");
    document.getElementById("envFilter1").style.setProperty("display", "none");
    document.getElementById("envFilter2").style.removeProperty("display");
    document.getElementById("envFilter2Count").style.removeProperty("display");
    document.getElementById("infoText").style.removeProperty("display");
  }
}

function setCameraSettingFilter(showNum) {
  console.log(showNum);
  if(showNum === 1) {
    document.getElementById("cameraFilter1")?.style.removeProperty("display");
    document.getElementById("cameraFilter2")?.style.setProperty("display", "none");
    document.getElementById("cameraFilter2Count")?.style.setProperty("display", "none");
    document.getElementById("cameraFilter2Text")?.style.setProperty("display", "none");
    document.getElementById("retakeFilterItemThree")?.classList.add("show");
    document.getElementById("retakeFilterItemFour")?.classList.remove("show");
  } else if(showNum === 2) {
    document.getElementById("retakeFilterItemThree")?.classList.remove("show");
    document.getElementById("retakeFilterItemFour")?.classList.add("show");
    document.getElementById("cameraFilter1")?.style.setProperty("display", "none");
    document.getElementById("cameraFilter2")?.style.removeProperty("display");
    document.getElementById("cameraFilter2Count")?.style.removeProperty("display");
    document.getElementById("cameraFilter2Text")?.style.removeProperty("display");
  }
}

function showMore(element) {
  element.style.setProperty("display", "none");
  Array.from(document.getElementsByClassName("StEventTable")).map((value) => {
    value.style.removeProperty("display");
  });
}

function rawDataModalButton(button) {
  if(button === 'CANCEL') {
    document.getElementById('rawDataModal').style.setProperty('display', 'none');
    scrollUnLock();
  } else if(button === 'OK') {
    location.href = '/Proctormatic-demo-kr/reportSpecific.html?'+reportNumber+'&'+targetNumber+'&true';
  }
}

function rawDataCheck(state) {
  if(state === 'checked') {
    location.href = '/Proctormatic-demo-kr/reportSpecific.html?'+reportNumber+'&'+targetNumber+'&false';
  } else if(state === 'unchecked'){
    document.getElementById('rawDataModal').style.removeProperty('display');
    // scrollLock
    scrollLock();
  }
}

function shareButtonClick() {
  document.getElementById('sendingConfirmModal').style.removeProperty('display');
  scrollLock();
}

function confirmButton(button) {
  if(button === 'CANCEL') {
    document.getElementById('sendingConfirmModal').style.setProperty('display', 'none');
    scrollUnLock();
  } else if(button === 'CONFIRM') {
    document.getElementById('sendingConfirmModal').style.setProperty('display', 'none');
    document.getElementById('sendingModal').style.removeProperty('display');
  }
}

function sendingCancelButton() {
  document.getElementById('sendingModal').style.setProperty('display', 'none');
  scrollUnLock();
}

function photoModalOn(modal) {
  if(modal === 'Modal1') {
    document.getElementById('envirPhotoModal1').style.removeProperty('display');
  } else if(modal === 'Modal2') {
    document.getElementById('envirPhotoModal2').style.removeProperty('display');
  } else if(modal === 'Modal3') {
    document.getElementById('cameraPhotoModal1').style.removeProperty('display');
  } else if(modal === 'Modal4') {
    document.getElementById('cameraPhotoModal2').style.removeProperty('display');
  }
  scrollLock();
}

function photoModalCancel(modal) {
  nowPhotoNumber = 1;
  if(modal === 'Modal1') {
    document.getElementById('envirPhotoModal1').style.setProperty('display', 'none');
    if(document.querySelector("#envirPhotoModal1 .pageNationBox img") !== null) {
      document.querySelectorAll("#envirPhotoModal1 .pageNationBox img").style.setProperty('display', 'none');
      document.querySelectorAll("#envirPhotoModal1 .pageNationBox img")[1].style.removeProperty('display');
      document.querySelectorAll("#envirPhotoModal1 .pageNationBox > div")[1].innerHTML = nowPhotoNumber + "/" + [settingPhoto?.aroundSetting?.preTestPhoto].length;
    }
    if(document.querySelector("#envirPhotoModal1 #titleText") !== null) {
      document.querySelector("#envirPhotoModal1 #titleText").innerHTML = [settingPhoto?.aroundSetting?.preTestPhoto.length] + ". 응시 중 재점검";
    }
    document.querySelector("#envirPhotoModal1 .imgBox img").src = settingPhoto?.aroundSetting?.preTestPhoto;
    
  } else if(modal === 'Modal2') {
    document.getElementById('envirPhotoModal2').style.setProperty('display', 'none');
    if(document.querySelector("#envirPhotoModal2 .pageNationBox img") !== null) {
      document.querySelectorAll("#envirPhotoModal2 .pageNationBox img")[0].style.setProperty('display', 'none');
      document.querySelectorAll("#envirPhotoModal2 .pageNationBox img")[1].style.removeProperty('display');
      document.querySelectorAll("#envirPhotoModal2 .pageNationBox > div")[1].innerHTML = nowPhotoNumber + "/" + settingPhoto?.aroundSetting?.reactivateTestPhotos.length;
    }
    if(document.querySelector("#envirPhotoModal2 #titleText") !== null) {
      document.querySelector("#envirPhotoModal2 #titleText").innerHTML = settingPhoto?.aroundSetting?.reactivateTestPhotos.length + ". 응시 중 재점검";
    }
    document.querySelector("#envirPhotoModal2 .imgBox img").src = settingPhoto?.aroundSetting?.reactivateTestPhotos[0];
    
  } else if(modal === 'Modal3') {
    document.getElementById('cameraPhotoModal1').style.setProperty('display', 'none');
    if(document.querySelector("#cameraPhotoModal1 .pageNationBox img") !== null) {
      document.querySelectorAll("#cameraPhotoModal1 .pageNationBox img")[0].style.setProperty('display', 'none');
      document.querySelectorAll("#cameraPhotoModal1 .pageNationBox img")[1].style.removeProperty('display');
      document.querySelectorAll("#cameraPhotoModal1 .pageNationBox > div")[1].innerHTML = nowPhotoNumber + "/" + [settingPhoto?.cameraSetting?.preTestPhoto].length;
    }
    if(document.querySelector("#cameraPhotoModal1 #titleText") !== null) {
      document.querySelector("#cameraPhotoModal1 #titleText").innerHTML = [settingPhoto?.cameraSetting?.preTestPhoto.length] + ". 응시 중 재점검";
    }
    document.querySelector("#cameraPhotoModal1 .imgBox img").src = settingPhoto?.cameraSetting?.preTestPhoto;
    
  } else if(modal === 'Modal4') {
    document.getElementById('cameraPhotoModal2').style.setProperty('display', 'none');
    if(document.querySelector("#cameraPhotoModal2 .pageNationBox img") !== null) {
      document.querySelectorAll("#cameraPhotoModal2 .pageNationBox img")[0].style.setProperty('display', 'none');
      document.querySelectorAll("#cameraPhotoModal2 .pageNationBox img")[1].style.removeProperty('display');
      document.querySelectorAll("#cameraPhotoModal2 .pageNationBox > div")[1].innerHTML = nowPhotoNumber + "/" + settingPhoto?.cameraSetting?.reactivateTestPhotos.length;
    }
    if(document.querySelector("#cameraPhotoModal2 #titleText") !== null) {
      document.querySelector("#cameraPhotoModal2 #titleText").innerHTML = settingPhoto?.cameraSetting?.reactivateTestPhotos.length + ". 응시 중 재점검";
    }
    document.querySelector("#cameraPhotoModal2 .imgBox img").src = settingPhoto?.cameraSetting?.reactivateTestPhotos[0];
    
  }
  scrollUnLock();
}

function photoModalPageNation(direction, element, photos) {
  var titleBox = element.parentNode.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling;
  var imgBox = element.parentNode.parentNode.previousSibling.previousSibling.previousSibling;
  var arr = photos.split(",");
  if(direction === 1) {
    nowPhotoNumber--;
    if(nowPhotoNumber === 1) {
      element.style.setProperty('display', 'none');
    }
    element.parentNode.nextSibling.nextSibling.firstChild.style.removeProperty('display');
    element.parentNode.nextSibling.innerHTML = nowPhotoNumber + "/" + arr.length;  
  } else if(direction === 2) {
    nowPhotoNumber++;
    if(nowPhotoNumber === arr.length) {
      element.style.setProperty('display', 'none');
    }
    element.parentNode.previousSibling.previousSibling.firstChild.style.removeProperty('display');
    element.parentNode.previousSibling.innerHTML = nowPhotoNumber + "/" + arr.length;
  }
  // console.log(arr.length + ", " + photoNumber);
  titleBox.childNodes[2].innerHTML = arr.length - nowPhotoNumber + 1 + ". 응시 중 재점검";
  imgBox.childNodes[2].src = arr[nowPhotoNumber - 1];
}

function scrollLock() {
  const scrollY = window.scrollY;
  const body = document.body;
  // Save the current scroll position and disable scrolling
  body.style.position = "fixed";
  if (window.innerWidth >= 1140) {
    body.style.width = "calc( 100% - 10px )";
  } else {
    body.style.width = "100%";
  }
  body.style.top = `-${scrollY}px`
}

function scrollUnLock() {
  const body = document.body;
  // Restore the scroll position and enable scrolling
  const scrollY = Math.abs(parseInt(body.style.top));
  body.style.position = "";
  body.style.width = "";
  body.style.top = "";
  // body.style.paddingRight = "60px";
  window.scrollTo(0, scrollY);

  // Remove the class from the body
  body.classList.remove("modal-open");
}