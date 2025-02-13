const strBeg = `<div class = "shape inner-shape">`;
const strEnd = `</div>`;

let mainStr = "";

for (let i = 1; i < 100; i++) {
  mainStr = strBeg + mainStr + strEnd;
}

console.log(mainStr);
