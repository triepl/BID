'use strict';

import * as data from './cleanData.js';
import * as draw from './draw.js';

const sample = data.getData();
const grid = 200;

let sumX = 0;
let sumY = 0;
let total = 0;

const xi = []; // xi is (obj.x - sumX)
const yi = []; // yi is (obj.y - sumY)
const sumXiYi = []; // sumXiYi is (xi* yi)
const xiSqaureSum = []; // (obj.x - sumX)^2
let totalSumXY = 0;
let totalxiSquare = 0;

sample.forEach(obj => {
   sumX+= obj.x * grid;
   sumY+= grid - obj.y * grid;
   total++;
});

const avgX = sumX / total;
const avgY = sumY / total;

sample.forEach(obj => {
    xi.push(obj.x*grid-avgX);
    yi.push((grid-obj.y*grid)-avgY);
});

for(let i = 0; i < total; i++) {
    sumXiYi.push(xi[i] * yi[i]);
    let value = Math.pow((sample[i].x * grid - avgX), 2);
    xiSqaureSum.push(value);
}

sumXiYi.forEach(value => {
   totalSumXY += value;
});

xiSqaureSum.forEach(value => {
   totalxiSquare += value;
});

const k = totalSumXY/totalxiSquare;

const d = avgY - k*avgX;

const startX = 0;
const startY = k*startX+d;

const endX = grid;
const endY = k*endX+d;


//draw the result
const pos = data.getPositive();
const neg = data.getNegative();
pos.forEach(obj => {
    draw.rectangel(obj.x * grid, grid - obj.y * grid, 'red');
});
neg.forEach(obj => {
    draw.rectangel(obj.x * grid, grid - obj.y * grid, 'blue');
});

const noClass = data.getUnclassified();
noClass.forEach(obj => {
    draw.rectangel(obj.x * grid, grid - obj.y * grid, 'green');
});


function calcErrorPos(obj) {
    let yLine = obj.x*k+d;
    return yLine >= obj.y;
}

function calcErrorNeg(obj) {
    let yLine = obj.x * k + d;
    return yLine < obj.y;
}
let cnt =0;
pos.forEach(obj => {
  if( calcErrorPos(obj)) {
      cnt++;
  }
});

let negcnt = 0;
neg.forEach(obj => {
    if( calcErrorNeg(obj)) {
        negcnt++;
    }
});


draw.line({x: startX, y: startY}, {x: endX, y: endY}, 'black');