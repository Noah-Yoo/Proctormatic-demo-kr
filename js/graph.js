var maxBarWidth = 1;
var fullWidth = 1;
var realBarWidth = 0;

function setMaxBarWidth(analysis) {
  let a = maxBarWidth;
  analysis?.map((value) => {
    if (value.count > a) {
      a = value.count 
    }
  });
  while (a % 4 !== 0) {
    a++;
  }
  maxBarWidth = a;
}

function setFullWidth() {
  fullWidth = document.getElementById('wid').clientWidth;
}

function setRealBarWidth() {
  realBarWidth = fullWidth / maxBarWidth;
}

function drawGraph(analysis) {
  document.write("<div class='StGraph'>");
    document.write("<div class='leftGraph'>");
      analysis?.map((value, index) => {
        let temp;
        if(value?.level === "cheat") {
          temp = "#C83B38";
        } else if(value?.level === "abnormal") {
          temp = "#FFBC00";
        } else {
          temp = "#3C9C9C";
        }
        document.write("<div class='bodyParts' key="+index+">");
          document.write("<div class='redDot' style='background-color:"+temp+";'></div>");
          document.write("<div class='bodyPart'>");
            document.write(value.part);
          document.write("</div>");
        document.write("</div>");
      });
    document.write("</div>");
    document.write("<div id='wid' class='middle'>");
      setMaxBarWidth(analysis);
      setFullWidth();
      setRealBarWidth();
      analysis?.map((value, index) => {
        let width = 0;
        width = realBarWidth * value?.count;
        document.write("<div class='barGraph' key="+index+">");
          document.write("<div class='StBar' full="+maxBarWidth+" style='width: "+width+"px;'></div>");
        document.write("</div>");
      });
      document.write("<div class='columnLineOne'>");
        document.write("0");
        document.write("<div class='lineForColumn'></div>");
      document.write("</div>");
      document.write("<div class='columnLineTwo'>");
        document.write(maxBarWidth / 4);
        document.write("<div class='lineForColumn'></div>");
      document.write("</div>");
      document.write("<div class='columnLineThree'>");
        document.write((maxBarWidth / 4) * 2);
        document.write("<div class='lineForColumn'></div>");
      document.write("</div>");
      document.write("<div class='columnLineFour'>");
        document.write((maxBarWidth / 4) * 3);
        document.write("<div class='lineForColumn'></div>");
      document.write("</div>");
      document.write("<div class='columnLineFive'>");
        document.write(maxBarWidth);
        document.write("<div class='lineForColumn'></div>");
      document.write("</div>");
    document.write("</div>");
    document.write("<div class='rightGraph'>");
      analysis.map((value, index) => {
        document.write("<div key="+index+" class='timeGraph'>");
          document.write(value.count + " / " + Math.floor(value.accDuration) + "s");
        document.write("</div>");
      });
    document.write("</div>");
  document.write("</div>");
}