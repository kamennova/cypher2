const str5 = [27, 66, 5, 56, 85, 76, 45, 16, 15, 35, 84, 9, 108, 68, 3, 108, 81, 24, 56, 81, 15, 39, 16, 31, 35, 93, 9, 108, 67, 5, 33, 64, 0, 41, 16, 31, 57, 82, 31, 56, 89, 24, 57, 68, 5, 35, 94, 76, 47, 89, 28, 36, 85, 30, 98, 16, 56, 35, 16, 30, 41, 84, 25, 47, 85, 76, 56, 88, 9, 108, 83, 3, 33, 64, 0, 41, 72, 5, 56, 73, 76, 35, 86, 76, 56, 88, 5, 63, 16, 3, 34, 85, 76, 59, 85, 76, 59, 89, 0, 32, 16, 25, 63, 85, 76, 35, 94, 0, 53, 16, 25, 60, 64, 9, 62, 83, 13, 63, 85, 76, 32, 85, 24, 56, 85, 30, 63, 28, 76, 63, 95, 76, 56, 88, 9, 108, 91, 9, 53, 67, 28, 45, 83, 9, 108, 89, 31, 108, 95, 2, 32, 73, 76, 126, 6, 77, 108, 100, 3, 108, 87, 9, 56, 16, 24, 36, 89, 31, 108, 95, 2, 41, 16, 30, 37, 87, 4, 56, 16, 13, 57, 68, 3, 33, 81, 24, 37, 83, 13, 32, 92, 21, 108, 73, 3, 57, 16, 27, 37, 92, 0, 108, 64, 30, 35, 82, 13, 46, 92, 21, 108, 94, 9, 41, 84, 76, 56, 95, 76, 57, 67, 9, 108, 67, 3, 33, 85, 76, 63, 95, 30, 56, 16, 3, 42, 16, 11, 41, 94, 9, 56, 89, 15, 108, 81, 0, 43, 95, 30, 37, 68, 4, 33, 16, 68, 59, 88, 5, 47, 88, 76, 59, 95, 30, 39, 85, 8, 108, 68, 4, 41, 16, 14, 41, 67, 24, 108, 92, 13, 63, 68, 76, 53, 85, 13, 62, 25, 64, 108, 67, 5, 33, 69, 0, 45, 68, 9, 40, 16, 13, 34, 94, 9, 45, 92, 5, 34, 87, 76, 35, 66, 76, 43, 66, 13, 40, 89, 9, 34, 68, 76, 40, 85, 31, 47, 85, 2, 56, 30, 76, 31, 85, 30, 37, 95, 25, 63, 92, 21, 96, 16, 27, 62, 89, 24, 41, 16, 5, 56, 16, 30, 37, 87, 4, 56, 16, 2, 35, 71, 64, 108, 73, 3, 57, 16, 27, 37, 92, 0, 108, 94, 9, 41, 84, 76, 37, 68, 76, 56, 95, 76, 40, 85, 15, 37, 64, 4, 41, 66, 76, 56, 88, 9, 108, 94, 9, 52, 68, 76, 35, 94, 9, 108, 81, 31, 108, 71, 9, 32, 92, 66, 108, 114, 9, 45, 66, 76, 37, 94, 76, 33, 89, 2, 40, 28, 76, 56, 88, 9, 62, 85, 142, 204, 169, 31, 108, 94, 3, 108, 67, 28, 45, 83, 9, 63, 30, 76, 70, 88, 24, 56, 64, 31, 118, 31, 67, 40, 95, 15, 63, 30, 11, 35, 95, 11, 32, 85, 66, 47, 95, 1, 99, 84, 3, 47, 69, 1, 41, 94, 24, 99, 84, 67, 125, 120, 53, 123, 116, 0, 97, 5, 5, 56, 105, 40, 127, 115, 51, 43, 91, 25, 41, 114, 26, 58, 114, 42, 60, 100, 88, 15, 85, 15, 11, 96, 5, 30, 3, 92, 14, 67, 45, 30, 92, 56, 60, 97, 67, 41, 84, 5, 56, 15, 25, 63, 64, 81, 63, 88, 13, 62, 89, 2, 43];
const str6 = [16 ,81 ,79 ,64 ,10 ,85 ,53 ,79 ,8 ,5 ,44 ,71 ,64 ,4 ,88 ,35 ,85 ,88 ,86 ,6 ,29 ,17 ,49 ,16 ,84 ,256 ,41 ,35 ,60 ,3 ,97 ,99 ,21 ,29 ,2 ,72 ,11 ,97 ,98 ,72 ,85 ,88 ,11 ,49 ,81 ,45 ,67 ,68 ,45 ,66 ,17 ,35 ,45 ,99 ,73 ,84 ,85 ,88 ,82 ,45 ,97 ,75 ,88 ,4 ,88 ,86 ,14 ,76 ,35 ,16 ,97 ,34 ,57 ,17 ,49 ,16 ,84 ,256 ,41 ,35 ,60 ,3 ,97 ,97 ,60 ,89 ,33 ,80 ,12 ,65 ,50 ,60 ,6 ,81 ,88 ,52 ,73 ,1 ,19 ,29 ,1 ,10 ,44 ,79 ,85 ,35 ,19 ,44 ,69 ,15 ,64 ,67 ,96 ,3 ,4 ,89 ,102 ,19 ,97 ,96 ,81 ,66 ,9 ,64 ,56 ,56 ,116 ,81 ,15 ,85 ,98 ,24 ,48 ,11 ,73 ,37 ,86 ,12 ,11 ,52 ,8 ,80 ,16 ,4 ,84 ,44 ,69 ,12 ,64 ,20 ,21 ,49 ,117 ,24 ,40 ,66 ,8 ,4 ,20 ,5 ,44 ,71 ,64 ,15 ,64 ,44 ,88 ,1 ,33 ,80 ,64 ,16 ,116 ,1 ,85 ,52 ,64 ,86 ,20 ,88 ,24 ,21 ,88 ,69 ,45 ,99 ,11 ,72 ,83 ,76 ,22 ,20 ,52 ,68 ,72 ,45 ,35 ,97 ,96 ,22 ,61 ,64 ,96 ,85 ,72 ,84 ,82 ,64 ,73 ,33 ,3 ,45 ,85 ,17 ,67 ,40 ,35 ,45 ,96 ,14 ,40 ,24 ,24 ,4 ,80 ,67 ,15 ,45 ,68 ,88 ,67 ,75 ,8 ,69 ,16 ,113 ,8 ,101 ,11 ,92 ,2 ,48 ,33 ,22 ,17 ,48 ,85 ,35 ,44 ,67 ,16 ,96 ,99 ,44 ,4 ,88 ,38 ,25 ,85 ,16 ,17 ,2 ,61 ,18 ,45 ,5 ,67 ,64 ,24 ,80 ,82 ,25 ,66 ,9 ,35 ,61 ,84 ,84 ,257 ,84 ,15 ,65 ,84 ,8 ,114 ,24 ,71 ,64 ,15 ,64 ,68 ,10 ,83 ,4 ,76 ,22 ,20 ,20 ,21 ,83 ,76 ,10 ,44 ,15 ,64 ,68 ,40 ,96 ,34 ,61 ,48 ,76 ,68 ,60 ,22 ,12 ,16 ,117 ,79 ,17 ,48 ,16 ,117 ,79 ,17 ,54 ,76 ,16 ,117 ,79 ,17 ,50 ,48 ,65 ,60 ,68 ,48 ,65 ,60 ,68];

const toLen = (s, len) => "0".repeat(len - s.length) + s;

const countUnique = (elems) => {
    const unique = [];
    for (const elem of elems) {
        if (!unique.includes(elem)) {
            unique.push(elem);
        }
    }

    return unique;
};

const createTable = (elems) => {
    const table = {};
    for (const elem of elems) {
        let old = table[ elem ];
        table[ elem ] = old == undefined ? 1 : old + 1;

    }
    const keys = Object.keys(table);
    keys.sort((a, b) => table[ a ] - table[ b ]);
    const table2 = {};
    keys.forEach(k => table2[ k ] = table[ k ]);

    return table2;
};

const coincidence = (letters) => {
    const table = createTable(letters);
    return Object.values(table).map(num => Math.pow(num / letters.length, 2)).reduce((acc, el) => acc + el);
};
// 1. find key length
// 2. key len = 4, A == e at these

const myXnor = (base, result) => {
    let base2 = base.toString(2);
    let res2 = result.toString(2);

    base2 = toLen(base2, Math.max(res2.length, base2.length));
    res2 = toLen(res2, Math.max(base2.length, res2.length));

    return parseInt(res2.split('').map((res, i) => {
        const b = base2[ i ];
        return ((b === '0' && res === '0') || (b === '1' && res === '1')) ? 0 : 1;
    }).join(''), 2);
};

// const Es = [ 'ℯ', '∊', 'ⓔ', 'e', 'ℰ', 'ℇ', 'E', 'e', 'ｅ', ' ' ];
// const Es = "ⓔ⒠ℯ∊€ḕḗḙḛḝẹẻềểễệἐἑἒἓἔἕὲέeℰℇ∃ḔḖḘḚḜẸẺẼẾỀỂỄỆῈΈἘἙἚἛ".split('');

const applyToText = (key, str) => {
    return str.split('').map((char, i) => {
        const code = key[i % key.length];
        return String.fromCharCode(char.charCodeAt(0) ^ code);
        // return char.charCodeAt(0) ^ code;
    }).join("");
};

const applyXnor = (key, str) => {
    return str.split('').map((char, i) => {
        const code = key[i % key.length];
        return String.fromCharCode(myXnor(code, char.charCodeAt(0)));
    }).join("");
};

const applyXnorToNums = (key, nums) => {
    return nums.map((num, i) => {
        const code = key[i % key.length];
        return String.fromCharCode(myXnor(code, num));
    }).join("");
};

const applyXorToNums = (key, nums) => {
    return nums.map((num, i) => {
        const code = key[i % key.length];
        return String.fromCharCode(code ^ num);
    }).join("");
};

const findKeyLen = (nums) => {
    const indexes = [];

 for (let i = 2; i < 100; i++){
     let sum = 0;
     for (let a = 0; a < i; a++){
         const num = nums.filter((ch, index) => (index+a) % i === 0);
         sum += coincidence(num);
     }
     const index = sum * 1000 / i;
//     console.log("=".repeat(index));
     indexes.push(index);
 }

    const filtered = indexes.map((elem, i) => [elem, i])
        .filter(e => e[1] > 0 &&  e[0] > indexes[e[1] + 1])
        .map(e => e[1]);
    const d = createTable(filtered.slice(1).map((elem, i) => elem - filtered[i]));
    return Number(Object.keys(d).sort((a, b) => d[b] - d[a])[0]);
 }

//console.log(str6.filter((e, i) => i % 2 === 0)
//            .map(e => e.toString(2))
//            .filter(e => e.length <= 7)
//            .map(e => toLen(e, 7)));

// 65 - 90
const divideGroups = (nums, keyLen) => {
    const groups = [];
    for (let i = 0; i < keyLen; i++){
        const group = nums.filter((elem, index) => index % keyLen - i === 0);
        groups.push(group);
    }
    return groups;
}

const filterBottom = (filteredValues) => {
    const diffs = filteredValues.slice(1).map((elem, i) => elem - filteredValues[i]);
        const bottom = diffs.slice(0, diffs.length / 4);
        return bottom.indexOf(Math.max.apply(Math, bottom)) + 1;
};

const filterTop = (filteredValues) => {
    const diffs = filteredValues.slice(1).map((elem, i) => elem - filteredValues[i]);
        const top = diffs.slice(Math.round(diffs.length / 4 * 3));
        return top.indexOf(Math.max.apply(Math, top)) + Math.round(diffs.length / 4 * 3) + 1;
};

// 65-90, 97-122
const filterOutliers = (someArray) => {
    const values = someArray.concat();
    values.sort((a, b) => a - b);
    const q1 = values[Math.floor((values.length / 4))];
    const q3 = values[Math.ceil((values.length * (3 / 4)))];
    const iqr = q3 - q1;
    const maxValue = q3 + iqr*1.5;
    const minValue = q1 - iqr*1.5;
    const filteredValues = values.filter((x) => (x <= maxValue) && (x >= minValue));

    return filteredValues.slice(filterBottom(filteredValues), filterTop(filteredValues));
}

const getKeyspace = (nums) => {
    const out = filterOutliers(nums);
    return {start: out[0], length: out[out.length - 1] - out[0]};
};

const decipher = (nums) => {
//    const nums = str.split('').map(char => char.charCodeAt(0));
    const keyLen = findKeyLen(nums);
    const groups = divideGroups(nums, keyLen);

    const keySpaces = groups.map(g => getKeyspace(g));
    console.log(keySpaces[0]);
}

// 76, 48, 108
decipher(str5)