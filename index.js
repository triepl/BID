'use strict';

import * as data from './cleanData.js';
import * as draw from './draw.js';

const pos = data.getPositive();
const neg = data.getNegative();
const noClass = data.getUnclassified();
const midpoint = {x: 0.5, y: 0.5};

let posY, negY;
let posX = 1;
let negX = 0;

// draw positive values
pos.forEach(obj => {
    draw.rectangel(obj.x * 200, 200 - obj.y * 200, 'red');
});

// draw negative values
neg.forEach(obj => {
    draw.rectangel(obj.x * 200, 200 - obj.y * 200, 'blue');
});

// the point of the positive values, which is closest to the 0 point
pos.forEach(obj => {
    if (obj.x < posX) {
        posX = obj.x;
        posY = obj.y;
    }
});
// the point of the negative values, which is closest to the 1 point
neg.forEach(obj => {
    if (obj.x > negX) {
        negX = obj.x;
        negY = obj.y;
    }
});

posX = posX * 200;
negX = negX * 200;
negY = 200 - negY * 200;
posY = 200 - posY * 200;

console.log('pos point', posX, posY);
console.log('neg point', negX, negY);


draw.rectangel(negX, negY, 'green');
draw.rectangel(posX, posY, 'deeppink');
draw.line({x: posX, y: posY}, {x: negX, y: negY}, 'black');
