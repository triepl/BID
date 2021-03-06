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
    sumX += obj.x * grid;
    sumY += grid - obj.y * grid;
    total++;
});

const avgX = sumX / total;
const avgY = sumY / total;

sample.forEach(obj => {
    xi.push(obj.x * grid - avgX);
    yi.push((grid - obj.y * grid) - avgY);
});

for (let i = 0; i < total; i++) {
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

let k = totalSumXY / totalxiSquare;

let d = avgY - k * avgX;

let startX;
let startY;
let endX;
let endY;

function calcStartAndEnd() {
    startX = 0;
    startY = k * startX + d;

    endX = grid;
    endY = k * endX + d;
}

calcStartAndEnd();

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

function calcErrorPosA(obj) {
    let yLine = (obj.x * grid) * k + d;
   // console.log('yline', yLine, 'obj.y', grid - obj.y * grid);
    return yLine >= grid - grid * obj.y;
}

function calcErrorNegA(obj) {
    let yLine = (obj.x * grid) * k + d;
    return yLine < grid - obj.y * grid;
}

function calcErrorPosB(obj) {
    let yLine = (obj.x * grid) * k + d;
    // console.log('yline', yLine, 'obj.y', grid - obj.y * grid);
    return yLine <= grid - grid * obj.y;
}

function calcErrorNegB(obj) {
    let yLine = (obj.x * grid) * k + d;
    return yLine > grid - obj.y * grid;
}

let calcObj = {
    A:{calcErrorPos:calcErrorPosA, calcErrorNeg: calcErrorNegA, type: 'A'},
    B:{calcErrorPos:calcErrorPosB, calcErrorNeg: calcErrorNegB, type: 'B'}
};

function posErrors(calcErrorPos) {
    let cnt = 0;
    pos.forEach(obj => {
        if (calcErrorPos(obj)) {
            cnt++;
        }
    });
    return cnt;
}

function negErrors(calcErrorNeg) {
    let negcnt = 0;
    neg.forEach(obj => {
        if (calcErrorNeg(obj)) {
            negcnt++;
        }
    });
    return negcnt;
}



function getErrorTypeByCategory(){
    let aCount = negErrors(calcObj.A.calcErrorNeg) + posErrors(calcObj.A.calcErrorPos);
    let bCount = negErrors(calcObj.B.calcErrorNeg) + posErrors(calcObj.B.calcErrorPos);
    return aCount < bCount ? calcObj.A  : calcObj.B;
}

let minErrors = 1000;
let optimizedObj = {k: k, d: d};

function optimization() {
    let errorTypeByCategory = getErrorTypeByCategory();

    //console.log('negError:', negErrors(errorTypeByCategory.calcErrorNeg), 'posError:', posErrors(errorTypeByCategory.calcErrorPos));
    let currentErrors = negErrors(errorTypeByCategory.calcErrorNeg) + posErrors(errorTypeByCategory.calcErrorPos);
    if (minErrors > currentErrors) {
        minErrors = currentErrors;
        optimizedObj = {k:k, d:d};
        //optimizedK = k;
        console.log('improved currentErrors:', currentErrors);

    }
    if (minErrors + 10 < currentErrors) {
        //console.log(optimizedK, k);
        return false
    }
    console.log('minError:', minErrors, 'currentError:', currentErrors);
    return true;
}

function runOptimizationK(maxIterations) {
    let startk = k;
    const adaptionK = 0.15;
    for (let i = 0; i < maxIterations; i++) {
        //break if no more optimization with k
        if (!optimization()) {
            break;
        }
        k = k + adaptionK;
    }
    //reset k
    k = startk;
    for (let j = 0; j < maxIterations; j++) {
        //break if no more optimization with k
       optimization();
        /* if (!optimization()) {
            console.log('broken neg');
            break;
        }*/
        k = k - adaptionK;

    }
    k = optimizedObj.k;
}

function getOptimalAdatptionForD(d){
    if(d > 50 && d < 150){
        return 2;
    }else if (d > 0 && d < 200){
        return 5;
    }else if (d > -100 && d < 300){
        return 10;
    }
    return 100;
}

function optimizationDandK(maxIteration) {
    let startD = d;

    for (let i = 0; i < maxIteration; i++) {

        if (!optimization()) {
            break;
        }
        runOptimizationK(50);

        let optimalAdaption = getOptimalAdatptionForD(d);

        d = d + optimalAdaption;
    }
    d = startD;
    for (let j = 0; j < maxIteration; j++) {

        optimization();
        runOptimizationK(50);

        let optimalAdaption = getOptimalAdatptionForD(d);
        d = d - optimalAdaption;
    }
    d = optimizedObj.d;
}
optimizationDandK(100);
//runOptimizationK(500);
calcStartAndEnd();
console.log(k);
draw.line({x: startX, y: startY}, {x: endX, y: endY}, 'black');