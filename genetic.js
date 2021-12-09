const {getRate} = require("./gen.js");
const {applyXnorToNums, nums} = require("./xor.js");

/*
- start
- rate

1. kill
2. pair
3. breed
4. mutate
*/
let COUNTER = 2;

/*
TODO
- 13.54 fix key len, run old
*/

const genetic = (keys, nums) => {
    let curr = keys.map(key => ({key, rate: getRate(applyXnorToNums(key, nums))}));
console.log(curr);
    for (let i = 0; i < COUNTER; i++) {
        curr = geneticStep(curr, nums);
    }

//    console.log(rest);
//            console.log(applyXnorToNums(rest[0].key, nums), rest.length, rest[0].rate, rest[0].key);

}

const geneticStep = (keys, nums) => {
    //console.log(keys);
    let rest = kill(keys);
    console.log(applyXnorToNums(rest[0].key, nums.slice(0, 100)), rest.length, rest[0].rate, rest[0].key);
    const pairs = getParents(rest);
    const children = breed(pairs);
    const filtered = children.filter(k => rest.find(({key}) => key.every((num, i) => num === k[i])) === undefined);

    rest = [...rest,
        ...filtered.map(k => ({ key: k, rate: getRate(applyXnorToNums(k, nums)) }))
    ];
    mutate(rest);
    updateRates(rest, nums);

    console.log(rest);
    return rest;
};

const kill = (keys) => {
    return keys.sort((k1, k2) => k2.rate - k1.rate)
                .slice(0, 20);
//            .slice(0, keys.length * 2 / 3);
}

const getParents = (keys) => {
    const rand = keys.sort((k1, k2) => 0.5 - Math.random());
    return rand.slice(0, rand.length % 2 === 0 ? Math.floor(rand.length / 2) : (Math.floor(rand.length / 2) - 1))
        .map((elem, i) => [elem, rand[Math.floor(rand.length / 2) + i]]);
};

const breed = (pairs) => {
    return pairs.map(([p1, p2]) => {
        const k1 = p1.key;
        const k2 = p2.key;
//        const a = Math.random();
        return p1.key.map((n, i) => Math.random() > 0.5 ? n : p2.key[i]);
    });
};

const mutateKey = (key) => {
    const index = Math.round(Math.random() * (key.length - 1));
    let upd = [...key];
    let size = Math.floor(Math.random() * 10);
    upd[index] = Math.max(0, key[index] + (Math.random() > 0.5 ? size : -size));
    return upd;
};

const mutate = (elems) => {
    elems.sort((a, b) => b.rate - a.rate).slice(0, elems.length / 3).forEach((elem) => {
        elems.push({
            key: mutateKey(elem.key)
        });
    });
}

//--------

const updateRates = (rest, nums) => {
    rest.forEach(elem => {
        if (elem.rate === null || elem.rate === undefined) {
            elem.rate = getRate(applyXnorToNums(elem.key, nums));
            if (elem.rate > 1000) {
                console.log(applyXnorToNums(elem.key, nums))
            }
            console.log(elem.rate, elem.key);
        }
    })
};

genetic(
[[10, 2, 30, 0], [5, 8, 1, 2], [15, 49, 2, 13], [12, 6, 14, 10], [8, 4, 23, 10], [14, 2, 5, 67], [8, 9, 23, 10], [14, 3, 5, 48]],
nums
)

module.exports = {
    genetic
}