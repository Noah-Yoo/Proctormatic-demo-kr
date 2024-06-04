function degToRad(degree) {
  return (Math.PI / 180) * degree;
};

function dountDraw(width, height, thick, degree, half, data, donut) {
  const datas = data;

  const text =
    data?.abnormal + data?.cheat + data?.notTaking + data?.analysisError;
  const state = "확인 필요";

  const colors = ["#3C9C9C", "#BDBDBD", "#FFBC00", "#C83B38"];
  const max =
    data?.abnormal +
    data?.cheat +
    data?.normal +
    data?.notTaking +
    data?.analysisError;
  const part = [
    {
      x: width / 2,
      y: height / 2,
      radius: 54, // 반지름
      startAngle: 270 - degree / 2, // 시작 각도
      endAngle: 270 - degree / 2 + (degree / max) * data?.normal, // 끝나는 각도
    },
    {
      x: width / 2,
      y: height / 2,
      radius: 54,
      startAngle: 270 - degree / 2 + (degree / max) * data?.normal,
      endAngle:
        270 -
        degree / 2 +
        (degree / max) * (data?.normal + data?.notTaking + data?.analysisError),
    },
    {
      x: width / 2,
      y: height / 2,
      radius: 54,
      startAngle:
        270 -
        degree / 2 +
        (degree / max) * (data?.normal + data?.notTaking + data?.analysisError),
      endAngle:
        270 -
        degree / 2 +
        (degree / max) *
          (data?.normal +
            data?.notTaking +
            data?.analysisError +
            data?.abnormal),
    },
    {
      x: width / 2,
      y: height / 2,
      radius: 54,
      startAngle:
        270 -
        degree / 2 +
        (degree / max) *
          (data?.normal +
            data?.notTaking +
            data?.analysisError +
            data?.abnormal),
      endAngle: 270 + degree / 2,
    },
  ];

  const dpr = window.devicePixelRatio;
  const canvas = document?.getElementById("canvas");
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  const ctx = canvas?.getContext("2d");
  ctx.scale(dpr, dpr);
  ctx.beginPath();
  ctx.clearRect(0, 0, width, height);
  ctx.font = "52px Medium";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText(text, width / 2, height / 2 + 17);
  ctx.font = "16px Medium";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText(state, width / 2, height / 2 + 52);
  if (
    datas?.abnormal > 0 ||
    datas?.analysisError > 0 ||
    datas?.cheat > 0 ||
    datas?.normal > 0 ||
    datas?.notTaking > 0
  ) {
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.strokeStyle = colors[i];
      ctx.lineWidth = 18;
      ctx.arc(
        part[i].x,
        part[i].y,
        part[i].radius,
        degToRad(part[i].startAngle),
        degToRad(part[i].endAngle),
        part[i].anticlockwise
      );
      ctx.stroke();
      ctx.closePath();
    }
  } else {
    ctx.beginPath();
    ctx.strokeStyle = "#EEF0F3";
    ctx.lineWidth = 18;
    ctx.arc(
      width / 2,
      height / 2,
      54,
      degToRad(270 - degree / 2),
      degToRad(270 + degree / 2)
    );
    ctx.stroke();
    ctx.closePath();
  }
  ctx.closePath();
}

