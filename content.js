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
}
function judge() {
  const rgbArea = document.querySelector("div#rgb-area");
  const rgbAnswer = rgbArea.style.backgroundColor;
  console.log(rgbAnswer);
  const rgbInput = document.querySelector("#rgb-input").value;
  console.log(rgbInput);

  const rgbAnswerArr = rgbAnswer.match(/\d+/g).map(Number);

  const hex = rgbInput;

  const rgbArray = [
    parseInt(hex.substr(0, 2), 16),
    parseInt(hex.substr(2, 2), 16),
    parseInt(hex.substr(4, 2), 16)
  ];

  
}
