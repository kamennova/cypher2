const {getRate} = require("./gen.js");
const {applyXnorToNums, nums, str5} = require("./xor.js");

/*
- start
- rate

1. kill
2. pair
3. breed
4. mutate
*/
let COUNTER = 100000;
//let COUNTER = 100;

/*
TODO
- 13.54 - 14.02 fix key len, run old
- 14.11 rating?
- 14.21 filter same
- split enhance
- function
- 39 break
*/

const MAX = 1000;

const genetic = (keys, nums) => {
    let curr = keys.map(key => ({key, rate: getRate(applyXnorToNums(key, nums))}));

    for (let i = 0; i < COUNTER; i++) {
        curr = geneticStep(curr, nums);
    }

    console.log(curr);
//            console.log(applyXnorToNums(rest[0].key, nums), rest.length, rest[0].rate, rest[0].key);
}

const geneticStep = (keys, nums) => {
    let rest = kill(keys);
    log(rest, nums);
    const pairs = getParents(rest);
    const children = breed(pairs);
    const filtered = children.filter(k => !isPresent(k, rest));

    rest = [...rest,
        ...filtered.map(k => ({ key: k, rate: getRate(applyXnorToNums(k, nums)) }))
    ];
    mutate(rest);
    updateRates(rest, nums);

    return rest;
};

const log = (rest, nums) => {
    console.log(applyXnorToNums(rest[0].key, nums.slice(0, 100)), rest[0].rate, rest[0].key);
}

const kill = (keys) => {
    return keys.sort((k1, k2) => k2.rate - k1.rate)
                .slice(0, MAX);
//            .slice(0, keys.length * 2 / 3);
}

const getParents = (keys) => {
//    const rand = keys;
//    return new Array(Math.floor(keys.length / 2)).fill(0).map((elem, i) => [rand[i*2], rand[i*2+1]]);

    const rand = keys.sort((k1, k2) => 0.5 - Math.random());
    return rand.slice(0, rand.length % 2 === 0 ? Math.floor(rand.length / 2) : (Math.floor(rand.length / 2) - 1))
        .map((elem, i) => [elem, rand[Math.floor(rand.length / 2) + i]]);
};

const breed = (pairs) => {
//console.log(pairs);
    return pairs.flatMap(([p1, p2]) => {
        const k1 = p1.key;
        const k2 = p2.key;
//        const a = Math.random();
        const splitRate = p1.key.map(k => Math.random() > 0.5);
        const kids = [p1.key.map((n, i) => splitRate[i] ? n : p2.key[i]), p1.key.map((n, i) => !splitRate[i] ? n : p2.key[i])];
//        console.log(p1.key, p2.key, kids);
        return kids;
    });
};

const mutateKey = (key) => {
    const index = Math.round(Math.random() * (key.length - 1));
    const big = Math.random() > 0.5;
    let upd = [...key];

    if (big) {
    let size = Math.floor(Math.random() * 30);
    upd[index] = Math.max(0, key[index] + (Math.random() > 0.5 ? size : -size));
//    console.log(upd);
    return upd;
    } else {
    let size = Math.floor(Math.random() * 3);
    const index2 = Math.round(Math.random() * (key.length - 1));
    upd[index] = Math.max(0, key[index] + (Math.random() > 0.5 ? size : -size));
    upd[index2] = Math.max(0, key[index2] + (Math.random() > 0.5 ? size : -size));
    return upd;
    }
};

const isPresent = (k, elems) => {
    return elems.find(({key}) => key.every((num, i) => (num === k[i] ))) !== undefined
}

const mutate = (elems) => {
    elems.sort((a, b) => b.rate - a.rate).slice(0, elems.length ).forEach((elem) => {
        const upd = mutateKey(elem.key);

        if (!isPresent(upd, elems)) {
        elems.push({
            key: upd
        });
        }
    });
}

//--------

const updateRates = (rest, nums) => {
    rest.forEach(elem => {
        if (elem.rate === null || elem.rate === undefined) {
            elem.rate = getRate(applyXnorToNums(elem.key, nums));
        }
    })
};

const keys4 = [[10, 2, 30, 0], [5, 8, 1, 2], [15, 49, 2, 13], [60, 6, 14, 10], [8, 23, 23, 10], [14, 2, 60, 67], [8, 9, 23, 10], [40, 3, 90, 48]];
const keys3 = [[10, 2, 30], [5,  8, 1], [15,47,2], [12,4,5]]; // [76, 48, 108]
const randomKey = (len) => {
    const k = [];
    for (let i =0; i < len; i++){
        k.push(Math.round(Math.random() * 100));
    }
    return k;
}

//genetic(keys3,str5)
//genetic(keys4,nums)
//genetic(Array(MAX).fill(0).map(elem => randomKey(4)), nums)
console.log(applyXnorToNums([ 47,45, 14, 49 ], nums))
module.exports = {
    genetic
}