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


function calcErrorPos(obj) {
    let yLine = obj.x * k + d;
    console.log('yline', yLine, 'obj.y', obj.y);
    return yLine >= obj.y;
}

function calcErrorNeg(obj) {
    let yLine = obj.x * k + d;
    return yLine < obj.y;
}

function posErrors() {
    let cnt = 0;
    pos.forEach(obj => {
        if (calcErrorPos(obj)) {
            cnt++;
        }
    });
    return cnt;
}

function negErrors() {
    let negcnt = 0;
    neg.forEach(obj => {
        if (calcErrorNeg(obj)) {
            negcnt++;
        }
    });
    return negcnt;
}

let minErrors = 1000;
let optimizedK = k;

function optimization() {
    console.log('negError:', negErrors(), 'posError:', posErrors());
    let currentErrors = negErrors() + posErrors();
    if (minErrors > currentErrors) {
        minErrors = currentErrors;
        optimizedK = k;
        console.log('improved', optimizedK, k);
    }
    if (minErrors + 10 < currentErrors) {
        console.log(optimizedK, k);
        return false
    }
    console.log('minError:', minErrors, 'currentError:', currentErrors);
    return true;
}

function runOptimization(maxIterations) {
    let startk = k;
    for (let i = 0; i < maxIterations; i++) {
        //break if no more optimization with k
        if (!optimization()) {
            console.log('broken pos', i);
            break;
        }
        console.log('k and optimizedK', k, optimizedK);
        k = k + 0.1;
        calcStartAndEnd();
        draw.line({x: startX, y: startY}, {x: endX, y: endY}, 'black');
    }
    //reset k
    k = startk;
    for (let i = 0; i < maxIterations; i++) {
        //break if no more optimization with k
        if (!optimization()) {
            console.log('broken neg');
            break;
        }
        k = k - 0.1;
        calcStartAndEnd();
        draw.line({x: startX, y: startY}, {x: endX, y: endY}, 'black');
    }
    k = optimizedK;
}

runOptimization(500);
calcStartAndEnd();

draw.line({x: startX, y: startY}, {x: endX, y: endY}, 'black');