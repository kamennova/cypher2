const t = `In the land of Ingary, where such things as seven-league boots and cloaks of invisibility really exist, it is quite a misfortune to be born the eldest of three. Everyone knows you are the one who will fail first, and worst, if the three of you set out to seek your fortunes. Sophie Hatter was the eldest of three sisters. She was not even the child of a poor woodcutter, which might have given her some chance of success. Her parents were well to do and kept a ladies’ hat shop in the prosperous town of Market Chipping. True, her own mother died when Sophie was two years old and her sister Lettie was one year old, and their father married his youngest shop assistant, a pretty blonde girl called Fanny. Fanny shortly gave birth to the third sister, Martha. This ought to have made Sophie and Lettie into Ugly Sisters, but in fact all three girls grew up very pretty indeed, though Lettie was the one everyone said was most beautiful. Fanny treated all three girls with the same kindness and did not favor Martha in the least. Mr. Hatter was proud of his three daughters and sent them all to the best school in town. Sophie was the most studious. She read a great deal, and very soon realized how little chance she had of an interesting future. It was a disappointment to her, but she was still happy enough, looking after her sisters and grooming Martha to seek her fortune when the time came. Since Fanny was always busy in the shop, Sophie was the one who looked after the younger two. There was a certain amount of screaming and hair-pulling between those younger two. Lettie was by no means resigned to being the one who, next to Sophie, was bound to be the least successful.`
const str = "UMUPLYRXOYRCKTYYPDYZTOUYDZHYJYUNTOMYTOLTKAOHOKZCMKAVZDYBRORPTHQLSERUOERMKZGQJOIDJUDNDZATUVOTTLMQBOWNMERQTDTUFKZCMTAZMEOJJJOXMERKJHACMTAZATIZOEPPJKIJJNOCFEPLFBUNQHHPPKYYKQAZKTOTIKZNXPGQZQAZKTOTIZYNIUISZIAELMKSJOYUYYTHNEIEOESULOXLUEYGBEUGJLHAJTGGOEOSMJHNFJALFBOHOKAGPTIHKNMKTOUUUMUQUDATUEIRBKYUQTWKJKZNLDRZBLTJJJIDJYSULJARKHKUKBISBLTOJRATIOITHYULFBITOVHRZIAXFDRNIORLZEYUUJGEBEYLNMYCZDITKUXSJEJCFEUGJJOTQEZNORPNUDPNQIAYPEDYPDYTJAIGJYUZBLTJJYYNTMSEJYFNKHOTJARNLHHRXDUPZIALZEDUYAOSBBITKKYLXKZNQEYKKZTOKHWCOLKURTXSKKAGZEPLSYHTMKRKJIIQZDTNHDYXMEIRMROGJYUMHMDNZIOTQEKURTXSKKAGZEPLSYHTMKRKJIIQZDTNROAUYLOTIMDQJYQXZDPUMYMYPYRQNYFNUYUJJEBEOMDNIYUOHYYYJHAOQDRKKZRRJEPCFNRKJUHSJOIRQYDZBKZURKDNNEOYBTKYPEJCMKOAJORKTKJLFIOQHYPNBTAVZEUOBTKKBOWSBKOSKZUOZIHQSLIJJMSURHYZJJZUKOAYKNIYKKZNHMITBTRKBOPNUYPNTTPOKKZNKKZNLKZCFNYTKKQNUYGQJKZNXYDNJYYMEZRJJJOXMERKJVOSJIOSIQAGTZYNZIOYSMOHQDTHMEDWJKIULNOTBCALFBJNTOGSJKZNEEYYKUIXLEUNLNHNMYUOMWHHOOQNUYGQJKZLZJZLOLATSEHQKTAYPYRZJYDNQDTHBTKYKYFGJRRUFEWNTHAXFAHHODUPZMXUMKXUFEOTIMUNQIHGPAACFKATIKIZBTOTIKZNKKZNLORUKMLLFBUUQKZNLEOHIEOHEDRHXOTLMIRKLEAHUYXCZYTGUYXCZYTIUYXCZYTCVJOEBKOHE";
const {text} = require("./text.js");

const isAlpha = function(ch){
        return /^[A-Z]$/i.test(ch);
      }

const makeNGrams = (str, len) => {
    const str2 = str.split('').filter(c => isAlpha(c)).join('').toLowerCase();

    const vals = {};
    for (let i = 0; i < str2.length - len; i++){
        const ng = str2.slice(i, i + len);
        if (vals[ng] === undefined) {vals[ng] = 1;} else {vals[ng]++;}
    }

    Object.keys(vals).forEach(k => vals[k] = vals[k] / (str2.length - len));
    return vals;
}

const ngrams2 = makeNGrams(text, 2);
const ngrams3 = makeNGrams(text, 3);

const getRate = (text) => {
    const quick = more(text)
    if (quick < 20) return quick;

    const ng2 = makeNGrams(text, 2);
    const ng3 = makeNGrams(text, 3);

    const rate = Object.entries(ng2).map(([k1, v1]) => {
        const v2 = ngrams2[k1];
        return v2 === undefined ? 0 : v2;
    }).reduce((a, b) => a+b);
//    const rate = 0;

    const rate2 = Object.entries(ng3).map(([k1, v1]) => {
            const v2 = ngrams3[k1];
            return v2 === undefined ? 0 : v2;
        }).reduce((a, b) => a+b);

    return rate + rate2 * 6 + quick * 100;
}

const isConsonant = (ch) => ['a','e', 'o', 'u', 'i', 'y'].indexOf(ch) === -1;

const more = (text) => {
    const alphaLow = text.toLowerCase().split('');
    let rate = 0;
    const percentAlpha = alphaLow.length / text.length;
    const percentRare = alphaLow.filter(l => l === 'x' || l === 'q' || l === 'z' || l === 'j' || l === 'k').length / alphaLow.length;
       const percentCommon = alphaLow.filter(l => l === 'e' || l === 't').length / alphaLow.length;
       const percentConsonant = alphaLow.filter(isConsonant).length / alphaLow.length;

    const aK = 0.06;
    const alphaK = 1 / Math.max(Math.abs(percentAlpha - 0.785), aK);
    rate += alphaK;
//    if (alphaK < 1 / aK) return rate; // 20

    const cK = 0.05
    const commonK = 1 / Math.max(Math.abs(percentCommon - 0.22), cK);
    rate += commonK;

    if (commonK < 1 / cK) return rate; // 40

    const conK = 0.1
    const consonantK = 1 / Math.max(Math.abs(percentConsonant - 0.57), conK);
    rate += consonantK;
    if (consonantK < 1 / conK) return rate; // 50


     const rK = 0.1
    const rareK = 1 / Math.max(Math.abs(percentRare - 0.015), rK);
    rate += rareK;
    if (rareK < 1 / rK) return rate; // 50
}

module.exports = {getRate};