'use strict';
import { rawData01, rawData02 } from  './data.js';

const negative = [];
const positive = [];
const unclassified = [];
const data = [];

function parseObj(obj) {
    const newObj = {};
    newObj.x = parseFloat(obj.x);
    newObj.y = parseFloat(obj.y);
    newObj.class = obj.class;
    return newObj;
}

rawData02.forEach(obj => {
    if (obj.class === -1) {
        negative.push(parseObj(obj));
    }
    if (obj.class === 1) {
        positive.push(parseObj(obj));
    }
    if (obj.class === '') {
        unclassified.push(parseObj(obj));
    }
    data.push(parseObj(obj));
});

export function getNegative() {
    return negative;
}

export function getPositive() {
    return positive;
}

export function getUnclassified() {
    return unclassified;
}

export function getData() {
    return data;
}