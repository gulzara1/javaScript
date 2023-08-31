// 1.  жаңадан бос Массив  құрыңыз  және оны clothes айнымалысына тағайындаңыз.
// Push () әдісін қолдана отырып,  5 элемент ретінде  галстук  қосыңыз.
// Pop ()  әдісін қолданып, массивтен бесінші киімді алып тастаңыз.

let clothes = ['shoes', 'hat', 't-shirt', 'coat',];
clothes.push('tie');
clothes.pop();
console.log(clothes);

// 2. LetterFinder деп аталатын функцияны жазыңыз, ол екі параметрді қабылдайды: word және match.
//  Осы параметрлерді console.log() арқылы экранга шығарыңыздар. 

function LetterFinder (word, match) {
}
console.log('word', 'match');

// 3. For циклінің ішіне if операторын қосыңыз, оның шарты келесідей жұмыс істейді:
// Word[I] көмегімен counter айнымалысын пайдаланып word-қа берілген мән ішіндегі әріптердің әрқайсысына қол жеткізіңіз.
// Word[I] сөзінің match мәніне тең екенін тексеріңіз.

let counter = ['word', 'match'];
for (let i = 0; i < counter.length; i++) {
    if ('word'[i] == 'match') {
    }
}
console.log(counter);

// 4.Размері 10 ға тең массив берілген , жұп индексте тұрған элементтердің суммасын табатын код жазыңыз. 

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
    for ( let i = 0; i < num.length; i++ ) {
        if (i%2 == 0) {
            sum+=num[i];
        }
    }
console.log(sum);

// 5. const arr = [1, 2, 3, 4, 5] массиві берілген.Өзіндік методиканы қолдана отырып массивті керісіншеге аударыңыз

const arr = [1, 2, 3, 4, 5];
console.log(arr[4], arr[3], arr[2], arr[1], arr[0]);
