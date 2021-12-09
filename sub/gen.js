const t = `In the land of Ingary, where such things as seven-league boots and cloaks of invisibility really exist, it is quite a misfortune to be born the eldest of three. Everyone knows you are the one who will fail first, and worst, if the three of you set out to seek your fortunes. Sophie Hatter was the eldest of three sisters. She was not even the child of a poor woodcutter, which might have given her some chance of success. Her parents were well to do and kept a ladies’ hat shop in the prosperous town of Market Chipping. True, her own mother died when Sophie was two years old and her sister Lettie was one year old, and their father married his youngest shop assistant, a pretty blonde girl called Fanny. Fanny shortly gave birth to the third sister, Martha. This ought to have made Sophie and Lettie into Ugly Sisters, but in fact all three girls grew up very pretty indeed, though Lettie was the one everyone said was most beautiful. Fanny treated all three girls with the same kindness and did not favor Martha in the least. Mr. Hatter was proud of his three daughters and sent them all to the best school in town. Sophie was the most studious. She read a great deal, and very soon realized how little chance she had of an interesting future. It was a disappointment to her, but she was still happy enough, looking after her sisters and grooming Martha to seek her fortune when the time came. Since Fanny was always busy in the shop, Sophie was the one who looked after the younger two. There was a certain amount of screaming and hair-pulling between those younger two. Lettie was by no means resigned to being the one who, next to Sophie, was bound to be the least successful.`
const str = "UMUPLYRXOYRCKTYYPDYZTOUYDZHYJYUNTOMYTOLTKAOHOKZCMKAVZDYBRORPTHQLSERUOERMKZGQJOIDJUDNDZATUVOTTLMQBOWNMERQTDTUFKZCMTAZMEOJJJOXMERKJHACMTAZATIZOEPPJKIJJNOCFEPLFBUNQHHPPKYYKQAZKTOTIKZNXPGQZQAZKTOTIZYNIUISZIAELMKSJOYUYYTHNEIEOESULOXLUEYGBEUGJLHAJTGGOEOSMJHNFJALFBOHOKAGPTIHKNMKTOUUUMUQUDATUEIRBKYUQTWKJKZNLDRZBLTJJJIDJYSULJARKHKUKBISBLTOJRATIOITHYULFBITOVHRZIAXFDRNIORLZEYUUJGEBEYLNMYCZDITKUXSJEJCFEUGJJOTQEZNORPNUDPNQIAYPEDYPDYTJAIGJYUZBLTJJYYNTMSEJYFNKHOTJARNLHHRXDUPZIALZEDUYAOSBBITKKYLXKZNQEYKKZTOKHWCOLKURTXSKKAGZEPLSYHTMKRKJIIQZDTNHDYXMEIRMROGJYUMHMDNZIOTQEKURTXSKKAGZEPLSYHTMKRKJIIQZDTNROAUYLOTIMDQJYQXZDPUMYMYPYRQNYFNUYUJJEBEOMDNIYUOHYYYJHAOQDRKKZRRJEPCFNRKJUHSJOIRQYDZBKZURKDNNEOYBTKYPEJCMKOAJORKTKJLFIOQHYPNBTAVZEUOBTKKBOWSBKOSKZUOZIHQSLIJJMSURHYZJJZUKOAYKNIYKKZNHMITBTRKBOPNUYPNTTPOKKZNKKZNLKZCFNYTKKQNUYGQJKZNXYDNJYYMEZRJJJOXMERKJVOSJIOSIQAGTZYNZIOYSMOHQDTHMEDWJKIULNOTBCALFBJNTOGSJKZNEEYYKUIXLEUNLNHNMYUOMWHHOOQNUYGQJKZLZJZLOLATSEHQKTAYPYRZJYDNQDTHBTKYKYFGJRRUFEWNTHAXFAHHODUPZMXUMKXUFEOTIMUNQIHGPAACFKATIKIZBTOTIKZNKKZNLORUKMLLFBUUQKZNLEOHIEOHEDRHXOTLMIRKLEAHUYXCZYTGUYXCZYTIUYXCZYTCVJOEBKOHE";

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

const test = `In which Sophie talks to hats.
              In the land of Ingary, where such things as seven-league boots and cloaks of invisibility really exist, it is quite a misfortune to be born the eldest of three. Everyone knows you are the one who will fail first, and worst, if the three of you set out to seek your fortunes.


              Sophie Hatter was the eldest of three sisters. She was not even the child of a poor woodcutter, which might have given her some chance of success. Her parents were well to do and kept a ladies’ hat shop in the prosperous town of Market Chipping. True, her own mother died when Sophie was two years old and her sister Lettie was one year old, and their father married his youngest shop assistant, a pretty blonde girl called Fanny. Fanny shortly gave birth to the third sister, Martha. This ought to have made Sophie and Lettie into Ugly Sisters, but in fact all three girls grew up very pretty indeed, though Lettie was the one everyone said was most beautiful. Fanny treated all three girls with the same kindness and did not favor Martha in the least.
              Mr. Hatter was proud of his three daughters and sent them all to the best school in town. Sophie was the most studious. She read a great deal, and very soon realized how little chance she had of an interesting future. It was a disappointment to her, but she was still happy enough, looking after her sisters and grooming Martha to seek her fortune when the time came. Since Fanny was always busy in the shop, Sophie was the one who looked after the younger two. There was a certain amount of screaming and hair-pulling between those younger two. Lettie was by no means resigned to being the one who, next to Sophie, was bound to be the least successful.
              “It’s not fair!” Lettie would shout. “Why should Martha have the best of it just because she was born the youngest? I shall marry a prince, so there!”
              To which Martha always retorted that she would end up disgustingly rich without having to marry anybody.
              Then Sophie would have to drag them apart and mend their clothes. She was very deft with her needle. As time went on, she made clothes for her sisters too. There was one deep rose outfit she made for Lettie, the May Day before this story really starts, which Fanny said looked as if it had come from the most expensive shop in Kingsbury.
              About this time everyone began talking of the Witch of the Waste again. It was said the Witch had threatened the life of the King’s daughter and that the King had commanded his personal magician, Wizard Suliman, to go into the Waste and deal with the Witch. And it seemed that Wizard Suliman had not only failed to deal with the Witch: he had got himself killed by her.
              So when, a few months after that, a tall black castle suddenly appeared on the hills above Market Chipping, blowing clouds of black smoke from its four tall, thin turrets, everybody was fairly sure that the Witch had moved out of the Waste again and was about to terrorize the country the way she used to fifty years ago. People got very scared indeed. Nobody went out alone, particularly at night. What made it all the scarier was that the castle did not stay in the same place. Sometimes it was a tall black smudge on the moors to the northwest, sometimes it reared above the rocks to the east, and sometimes it came right downhill to sit in the heather only just beyond the last farm to the north. You could see it actually moving sometimes, with smoke pouring out from the turrets in dirty gray gusts. For a while everyone was certain that the castle would come right down into the valley before long, and the Mayor talked of sending to the King for help.
              But the castle stayed roving about the hills, and it was learned that it did not belong to the Witch but to Wizard Howl. Wizard Howl was bad enough. Though he did not seem to want to leave the hills, he was known to amuse himself by collecting young girls and sucking the souls from them. Or some people said he ate their hearts. He was an utterly cold-blooded and heartless wizard and no young girl was safe from him if he caught her on her own. Sophie, Lettie, and Martha, along with all the other girls in Market Chipping, were warned never to go out alone, which was a great annoyance to them. They wondered what use Wizard Howl found for all the souls he collected.
              They had other things on their minds before long, however, for Mr. Hatter died suddenly just as Sophie was old enough to leave school for good. It then appeared that Mr. Hatter had been altogether too proud of his daughters. The school fees he had been paying had left the shop with quite heavy debts. When the funeral was over, Fanny sat down in the parlor in the house next door to the shop and explained the situation.
              “You’ll all have to leave that school, I’m afraid,” she said. “I’ve been doing sums back and front and sideways, and the only way I can see to keep the business going and take care of the three of you is to see you all settled in a promising apprenticeship somewhere. It isn’t practical to have you all in the shop. I can’t afford it. So this is what I’ve decided. Lettie first—”
              Lettie looked up, glowing with health and beauty which even sorrow and black clothes could not hide. “I want to go on learning,” she said.
              “So you shall, love,” said Fanny. “I’ve arranged for you to be apprenticed to Cesari’s, the pastry cook in
              Market Square
              . They’ve a name for treating their learners like kings and queens, and you should be very happy there, as well as learning a useful trade. Mr
              s. Cesari’s a good customer and a good friend, and she’s agreed to squeeze you in as a favor.”
              Lettie laughed in the way that showed she was not at all pleased. “Well, thank you,” she said. “Isn’t it lucky that I like cooking?”
              Fanny looked relieved. Lettie could be awkwardly strong-minded at times. “Now Martha,” she said. “I know you’re full young to go out to work, so I’ve thought round for something that would give you a long, quiet apprenticeship and go on being useful to you whatever you decide to do after that. You know my old school friend Annabel Fairfax?”
              Martha, who was slender and fair, fixed her big gray eyes on Fanny almost as strong-mindedly as Lettie. “You mean the one who talks such a lot,” she said. “Isn’t she a witch?”
              Yes, with a lovely house and clients all over the FoldingValley,” Fanny said eagerly. “She’s a good woman, Martha. She’ll teach you all she knows and very likely introduce you to grand people she knows in Kingsbury. You’ll be all set up in life when she’s done with you.”
              “She’s a nice lady,” Martha conceded. “All right.”
              Sophie, listening, felt that Fanny had worked everything out just as it should be. Lettie, as the second daughter, was never likely to come to much, so Fanny had put her where she might meet a handsome young apprentice and live happily ever after. Martha, who was bound to strike out and make her fortune, would have witchcraft and rich friends to help her. As for Sophie herself, Sophie had no doubt what was coming. It did not surprise her when Fanny said, “Now, Sophie dear, it seems only right and just that you should inherit the hat shop when I retire, being the eldest as you are. So I’ve decided to take you on as apprentice myself, to give you a chance to learn the trade. How do you feel about that?”
              Sophie could hardly say that she simply felt resigned to the hat trade. She thanked Fanny gratefully.
              “So that’s settled then!” Fanny said.
              The next day Sophie helped Martha pack her clothes in a box, and the morning after that they all saw her off on the carrier’s cart, looking small and upright and nervous. For the way to Upper Folding, where Mrs. Fairfax lived, lay over the hills past Wizard Howl’s moving castle. Martha was understandably scared.
              “She’ll be all right,” said Lettie. Lettie refused all help with the packing. When the carrier’s cart was out of sight, Lettie crammed all her possessions into a pillow case and paid the neighbor’s bootboy sixpence to wheel it in a wheelbarrow to Cesari’s in
              Market Square
              . Lettie marched behind the wheelbarrow looking much more cheerful than Sophie expected. Indeed, she had the air of shaking the dust of the hat shop off her feet.
              The bootboy brought back a scribbled note from Lettie, saying she had put her things in the girls’ dormitory and Cesari’s seemed great fun. A week later the carrier brought a letter from Martha to say that Martha had arrived safely and that Mrs. Fairfax was “a great dear and uses honey with everything. She keeps bees.” That was all Sophie heard of her sisters for quite a while, because she started her own apprenticeship the day Martha and Lettie left.
              Sophie of course knew the hat trade quite well already. Since she was a tiny child she had run in and out of the big workshed across the yard where the hats were damped and molded on blocks, and flowers and fruit and other trimmings were made from wax and silk.
              She knew the people who worked there. Most of them had been there when her father was a boy. She knew Bessie, the only remaining shop assistant. She knew the customers who bought the hats and the man who drove the cart which fetched raw straw hats in from the country to be shaped on the blocks in the shed. She knew the other suppliers and how you made felt for winter hats. There was not really much that Fanny could teach her, except perhaps the best way to get a customer to buy a hat.
              “You lead up to the right hat, love,” Fanny said. “Show them the ones that won’t quite do first, so they know the difference as soon as they put the right one on.”
              In fact, Sophie did not sell hats very much. After a day or so observing in the workshed, and another day going round the clothier and the silk merchant’s with Fanny, Fanny set her to trimming hats. Sophie sat in a small alcove at the back of the shop, sewing roses to bonnets and veiling to velours, lining all of them with silk and arranging wax fruit and ribbons stylishly on the outsides. She was good at it. She quite liked doing it. But she felt isolated and a little dull. The workshop people were too old to be much fun and, besides, they treated her as someone apart who was going to inherit the business someday. Bessie treated her the same way. Bessie’s only talk anyway was about the farmer she was going to marry the week after May Day. Sophie rather envied Fanny, who could bustle off to bargain with the silk merchant whenever she wanted
              `

const ngrams2 = makeNGrams(test, 2);
const ngrams3 = makeNGrams(test, 3);

const getRate = (text) => {
//    const quick = more(text)
const quick = 0;
//    if (quick < 20) return quick;

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
    const percentRare = alphaLow.filter(l => l === 'x' || l === 'q' || l === 'z' || l === 'j' || l === 'k').length / alphaLow.length;
       const percentCommon = alphaLow.filter(l => l === 'e' || l === 't').length / alphaLow.length;
       const percentConsonant = alphaLow.filter(isConsonant).length / alphaLow.length;

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