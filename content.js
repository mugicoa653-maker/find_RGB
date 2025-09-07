function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function start() {
  // RGBエリアの要素を取得
  const rgbArea = document.querySelector("div#rgb-area");

  // ランダムな3つの数を生成
  let red = getRandomInt(255);
  let green = getRandomInt(255);
  let blue = getRandomInt(255);

  // エリアの背景にランダムなカラーを指定
  rgbArea.style.backgroundColor = `rgb(${red},${green},${blue})`;

  document.querySelector("#rgb-input").value ="";
  percent.textContent="";
}
function judge() {
  const rgbArea = document.querySelector("div#rgb-area");
  const rgbAnswer = rgbArea.style.backgroundColor;
  console.log(rgbAnswer);
  const rgbInput = document.querySelector("#rgb-input").value;
  console.log(rgbInput);

  // 正解のRGB配列
  const rgbAnswerArr = rgbAnswer.match(/\d+/g).map(Number);

  // inputされたRGB配列
  const rgbArray = [
    parseInt(rgbInput.substr(0, 2), 16),
    parseInt(rgbInput.substr(2, 2), 16),
    parseInt(rgbInput.substr(4, 2), 16)
  ];

  // r比較 (絶対値/(256/2))で正解の割合を出す (半分以上のズレは0)
  let ansDiff = 100
  for (let i=0; i<3; i++){
    if(Math.abs(rgbAnswerArr[i] - rgbArray[i])<124){
        let diff = Math.abs(rgbAnswerArr[i] - rgbArray[i]);
        let diff_100 = diff/124;
        let diff_33_1 = Math.round(diff_100/3*1000)/10;
        ansDiff -= diff_33_1;
    }else{
        ansDiff -= 33;
    }
  }
  const percent =document.querySelector("#percent");
  percent.textContent=ansDiff;
}
