const {getRate} = require("./gen.js");

const str = "UMUPLYRXOYRCKTYYPDYZTOUYDZHYJYUNTOMYTOLTKAOHOKZCMKAVZDYBRORPTHQLSERUOERMKZGQJOIDJUDNDZATUVOTTLMQBOWNMERQTDTUFKZCMTAZMEOJJJOXMERKJHACMTAZATIZOEPPJKIJJNOCFEPLFBUNQHHPPKYYKQAZKTOTIKZNXPGQZQAZKTOTIZYNIUISZIAELMKSJOYUYYTHNEIEOESULOXLUEYGBEUGJLHAJTGGOEOSMJHNFJALFBOHOKAGPTIHKNMKTOUUUMUQUDATUEIRBKYUQTWKJKZNLDRZBLTJJJIDJYSULJARKHKUKBISBLTOJRATIOITHYULFBITOVHRZIAXFDRNIORLZEYUUJGEBEYLNMYCZDITKUXSJEJCFEUGJJOTQEZNORPNUDPNQIAYPEDYPDYTJAIGJYUZBLTJJYYNTMSEJYFNKHOTJARNLHHRXDUPZIALZEDUYAOSBBITKKYLXKZNQEYKKZTOKHWCOLKURTXSKKAGZEPLSYHTMKRKJIIQZDTNHDYXMEIRMROGJYUMHMDNZIOTQEKURTXSKKAGZEPLSYHTMKRKJIIQZDTNROAUYLOTIMDQJYQXZDPUMYMYPYRQNYFNUYUJJEBEOMDNIYUOHYYYJHAOQDRKKZRRJEPCFNRKJUHSJOIRQYDZBKZURKDNNEOYBTKYPEJCMKOAJORKTKJLFIOQHYPNBTAVZEUOBTKKBOWSBKOSKZUOZIHQSLIJJMSURHYZJJZUKOAYKNIYKKZNHMITBTRKBOPNUYPNTTPOKKZNKKZNLKZCFNYTKKQNUYGQJKZNXYDNJYYMEZRJJJOXMERKJVOSJIOSIQAGTZYNZIOYSMOHQDTHMEDWJKIULNOTBCALFBJNTOGSJKZNEEYYKUIXLEUNLNHNMYUOMWHHOOQNUYGQJKZLZJZLOLATSEHQKTAYPYRZJYDNQDTHBTKYKYFGJRRUFEWNTHAXFAHHODUPZMXUMKXUFEOTIMUNQIHGPAACFKATIKIZBTOTIKZNKKZNLORUKMLLFBUUQKZNLEOHIEOHEDRHXOTLMIRKLEAHUYXCZYTGUYXCZYTIUYXCZYTCVJOEBKOHE";
const LETTERS =  "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z".split(", ").map(c => c.toLowerCase());

const createAlphabet = () => {
    const m = {};
    [...LETTERS].sort((a, b) => Math.random() - 0.5).forEach((l, i) => m[LETTERS[i]] = l);
    return m;
};

// key consists of alphabets
const decipher = (key, text) => {
    return text.split('')
        .map((ch, i) => {
            const a = key[i % key.length];
            return a[ch.toLowerCase()];
        }).join("");
}

const generateKey = (len) => Array(len).fill(0).map(a => createAlphabet());

//let COUNTER = 100000;
let COUNTER = 1000;
const MAX = 1000;

const genetic = (keyLen, text) => {
    let curr = Array(MAX).fill(0).map(l => generateKey(keyLen))
                .map(key => ({key, rate: getRate(decipher(key, text))}));
    for (let i = 0; i < COUNTER; i++) {
        curr = geneticStep(curr, text);
    }
}

const geneticStep = (keys, text) => {
    let rest = kill(keys);
    log(rest, text);
    const pairs = getParents(rest);
    const children = breed(pairs);
    const filtered = children.filter(k => !isPresent(k, rest));
    rest = [...rest,
        ...filtered.map(k => ({ key: k, rate: getRate(decipher(k, text)) }))
    ];
    mutate(rest);
    updateRates(rest, text);

    return rest;
};

const log = (rest, nums) => {
    console.log(decipher(rest[0].key, nums.slice(0, 100)), rest[0].rate);
}

const kill = (keys) => {
    return keys.sort((k1, k2) => k2.rate - k1.rate)
                .slice(0, MAX);
}

const getParents = (keys) => {
//    const rand = keys;
//    return new Array(Math.floor(keys.length / 2)).fill(0).map((elem, i) => [rand[i*2], rand[i*2+1]]);

    const rand = keys.sort((k1, k2) => 0.5 - Math.random());
    return rand.slice(0, rand.length % 2 === 0 ? Math.floor(rand.length / 2) : (Math.floor(rand.length / 2) - 1))
        .map((elem, i) => [elem, rand[Math.floor(rand.length / 2) + i]]);
};

const breed = (pairs) => {
    return pairs.flatMap(([p1, p2]) => {
        const splitRate = Array(26).fill(0).map(k => Math.random() > 0.5);

        const kidArr = [];
        const kidArr2 = [];
        p1.key.map((alphabet, i) => {

        const k1 = p1.key[i];
        const k2 = p2.key[i];

        const kid1 = {};
        const kid2 = {};
        splitRate.forEach((val, i) => {
        const l = LETTERS[i]
            kid1[l] = val ? k1[l] : k2[l]
            kid2[l] = !val ? k1[l] : k2[l]
        })

        kidArr.push(kid1);
        kidArr2.push(kid2);
        });

        const kids = [kidArr, kidArr2];
        return kids;
    })
};

const copy = (key) => {
    const n = [];
    key.forEach(elem => n.push({...elem}));
    return n;
};

const mutateKey = (key) => {
    const k = LETTERS;
    let upd = copy(key);
    for (let i =0; i < key.length; i++){
        const index = k[Math.round(Math.random() * 26)];
        const index2 =  LETTERS[(LETTERS.indexOf(upd[i][index]) + 1) % LETTERS.length]
        upd[i][index] = index2;
    }
    return upd;

    if (big) {
    let size = Math.floor(Math.random() * 30);
    upd[index] = Math.max(0, key[index] + (Math.random() > 0.5 ? size : -size));
    return upd;
    } else {
    let size = Math.floor(Math.random() * 3);
    const index2 = Math.round(Math.random() * (key.length - 1));
    upd[index] = Math.max(0, key[index] + (Math.random() > 0.5 ? size : -size));
    upd[index2] = Math.max(0, key[index2] + (Math.random() > 0.5 ? size : -size));
    return upd;
    }
};

const swap = (alpha, ch1, ch2) => {
    const t = alpha[ch1];
    alpha[ch1] = ch2;
    alpha[ch2] = t;
}

const isPresent = (k, elems) => {
    return false;
//    return elems.find(({key}) => key.every((num, i) => (num === k[i] ))) !== undefined
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
            elem.rate = getRate(decipher(elem.key, nums));
        }
    })
};

genetic(4, str)

module.exports = {
    genetic
}