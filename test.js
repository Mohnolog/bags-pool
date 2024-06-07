// const price = (a, b, c, d, e, f, g, h, i, j) => {
//   let weightExcess = 0;
//   let price = [0, 125, 250, 375, 500, 625, 750, 875, 1000, 1125, 1250];
//   let excessParameters = [0, -9, -18, -27, -36, -45, -54, -63, -72, -81, -90];

//   let allowance = [46, 69, 92, 115, 138, 161, 184, 207, 230];

//   for (let m = 0; m < allowance.length; m++) {
//     if (a && b && !c && !d && !e && !f && !g && !h && !i && !j) {
//       weightExcess = allowance[0] - (a + b);
//     } else if (a && b && c && !d && !e && !f && !g && !h && !i && !j) {
//       weightExcess = allowance[1] - (a + b + c);
//     } else if (a && b && c && d && !e && !f && !g && !h && !i && !j) {
//       weightExcess = allowance[2] - (a + b + c + d);
//     } else if (a && b && c && d && e && !f && !g && !h && !i && !j) {
//       weightExcess = allowance[3] - (a + b + c + d + e);
//     } else if (a && b && c && d && e && f && !g && !h && !i && !j) {
//       weightExcess = allowance[4] - (a + b + c + d + e + f);
//     } else if (a && b && c && d && e && f && g && !h && !i && !j) {
//       weightExcess = allowance[5] - (a + b + c + d + e + f + g);
//     } else if (a && b && c && d && e && f && g && h && !i && !j) {
//       weightExcess = allowance[6] - (a + b + c + d + e + f + g + h);
//     } else if (a && b && c && d && e && f && g && h && i && !j) {
//       weightExcess = allowance[7] - (a + b + c + d + e + f + g + h + i);
//     } else if (a && b && c && d && e && f && g && h && i && j) {
//       weightExcess = allowance[8] - (a + b + c + d + e + f + g + h + i + j);
//     }
//   }
//   console.log(weightExcess);
//   if (weightExcess === excessParameters[0]) {
//     price = price[0];
//   } else if (
//     weightExcess < excessParameters[0] &&
//     weightExcess >= excessParameters[1] /*less than 9 kilos excess*/
//   ) {
//     price = price[1]; /*125*/
//   } else if (
//     weightExcess < excessParameters[1] &&
//     weightExcess >= excessParameters[2] /*9 kilos excess+*/
//   ) {
//     price = price[2]; /*250*/
//   } else if (
//     weightExcess < excessParameters[2] &&
//     weightExcess >= excessParameters[3] /*18 kilos excess+*/
//   ) {
//     price = price[3]; /*375*/
//   } else if (
//     weightExcess < excessParameters[3] &&
//     weightExcess >= excessParameters[4] /*27 kilos excess+*/
//   ) {
//     price = price[4]; /*500*/
//   } else if (
//     weightExcess < excessParameters[4] &&
//     weightExcess >= excessParameters[5] /*36 kilos excess+*/
//   ) {
//     price = price[5]; /*625*/
//   } else if (
//     weightExcess < excessParameters[5] &&
//     weightExcess >= excessParameters[6] /*45 kilos excess+*/
//   ) {
//     price = price[6]; /*750*/
//   } else if (
//     weightExcess < excessParameters[6] &&
//     weightExcess >= excessParameters[7] /*54 kilos excess+*/
//   ) {
//     price = price[7]; /*875*/
//   } else if (
//     weightExcess < excessParameters[7] &&
//     weightExcess >= excessParameters[8] /*63 kilos excess+*/
//   ) {
//     price = price[8]; /*1000*/
//   } else if (
//     weightExcess < excessParameters[8] &&
//     weightExcess >= excessParameters[9] /*72 kilos excess+*/
//   ) {
//     price = price[9]; /*1125*/
//   } else if (
//     weightExcess < excessParameters[9] &&
//     weightExcess >= excessParameters[10] /*81 kilos excess+*/
//   ) {
//     price = price[10]; /*1250*/
//   } else if (weightExcess < excessParameters[10] /*90 kilos excess+*/) {
//     console.log("unauthorized");
//   }
//   return price;
// };

// console.log(`price ${price(30, 25, 24, 25)} euros`);

excess = {
  weightExcess: [-18],
  price: [250],
  weight: [23, 32, 23, 29, 19, 30, null, null, null, null],
};
// for (let i = 0; i < excess.price.length; i++) {
//   console.log(excess.price[i]);
// }
let result = 0;
let something = 0;
for (let i = 0; i < excess.weight.length; i++) {
  if (excess.weight[i]) {
    result = result + 1;
    something = something + excess.weight[i];
  }
}
console.log(result);
console.log(something);
