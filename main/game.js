let xMap = 0;
let yMap = 0;
let wMap = 1200;
let hMap = 700;
let xMapTarget = -700;
let yMapTarget = -800;
let wMapTarget = 2400;
let hMapTarget = 1600;

function startGame() {
  if (frameCount < 3*60) {
    image(map, xMap, yMap, wMap, hMap);
  } else {
    xMap = lerp(xMap, xMapTarget, 0.05);
    yMap = lerp(yMap, yMapTarget, 0.05);
    wMap = lerp(wMap, wMapTarget, 0.05);
    hMap = lerp(hMap, hMapTarget, 0.05);

    image(map, xMap, yMap, wMap, hMap);
  }
}
