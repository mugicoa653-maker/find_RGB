function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function start(){
    // RGBエリアの要素を取得
    const rgbArea = document.querySelector("div#rgb-area");

    // ランダムな3つの数を生成
    let red = getRandomInt(255);
    let green = getRandomInt(255);
    let blue = getRandomInt(255);

    // エリアの背景にランダムなカラーを指定
    rgbArea.style.backgroundColor = `rgb(${blue},${green},${red})`;
}