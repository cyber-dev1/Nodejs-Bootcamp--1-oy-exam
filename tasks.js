// ! Har bir masalaga 10 daqiqadan vaqt sarflang oshib ketmasin...

// Masala - 1

// Arraydagi eng katta sonni topish kerak for loop bilan

const numbers = [23, 45, 67, 89, 34, 56, 33, 151, 78, 20];

function maxNumber (arr){
    let count = 0 ;
    for (let i = 0; i <= arr.length-1; i++) {
        if(arr[i] > count){
            count = arr[i] ;
        }
    };
    return count ;
}
maxNumber(numbers)


// Masala - 2

// Arraydagi eng uzun so'zni topib uning oxirgisidan bitta oldingi harfini topish

const fruites = ["Olma", "Nok", "Anor", "Chegara"];

function handleLetter(arr){
    let maxLength = '' ;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > maxLength.length){
            maxLength = arr[i] ;
        }
    }
    return maxLength.at(-2)
};
handleLetter(fruites)


// Masala - 3

// Arraydagi barcha stringning lengthini topish

const fruite = ["Olma", "anor", "Nok"];

function handleAllLength(arr){
    let idx = 0 ;
    for (let i = 0; i < arr.length; i++) {
        idx += arr[i].length ;
    };
    return idx ;
};
handleAllLength(fruite)


// Masala - 4

// Arrayda kamida 6 ta toq va juft son bor, va shundan juft sonlarning yarmini ya'ni 18 juft soni bo'lsa uning yarmi 9 sonini bir arrayga solib qaytarib bersin ya'ni hamma juftlarning yarmini bitta arrayga joylash kerak

const evenNumbers = [23, 58, 96, 31, 74, 44, 152, 531, 26];

function handleEvenNumbers(arr){
    let newArr = [] ;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0){
            let evenNum = arr[i] / 2 ;
            newArr.push(evenNum) ;
        };
    };
    return newArr ;
};
handleEvenNumbers(evenNumbers)



// Masala - 5

// Arraydagi katta harf bilan boshlangan so'zlarning birinchi harfini kichik qolgan harfini katta qilib, kichik harf bilan boshlanganlarini birinchi harfini katta qolganlarini kichkina qib bersin

const fruitLetter = ["olma", "o'rik", "Nok", "avacado"];

function handleFruit(arr){
    let newAllFruits = [] ;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].at(0) == arr[i].at(0).toUpperCase()){
            let start = arr[i].at(0).toLowerCase();
            let end = arr[i].slice(1).toUpperCase() ;
            newAllFruits.push(start+end) ;
        }else{
            let starts = arr[i].at(0).toUpperCase() ;
            let ends = arr[i].slice(1).toLowerCase() ;
            newAllFruits.push(starts+ends) ;
        };
    };
    return newAllFruits ;
};
handleFruit(fruitLetter);


// Masala - 6

// Promptdan bir so'z kiritish kerak va shu so'zni 3 marta space bilan chiqarib berish kerak for loop da

// example: olma => olma olma olma



// let word = prompt("so'z kirit");
// function handleRepeatWord(letter){
//     let res = '';
//     for (let i = 1; i <= 3 ; i++) {
//        res += ` ${letter} ` ;
//     };
//     return res ;
// }
// handleRepeatWord(word)


// Masala - 7
// Ichma ich array bor va shu arrayning juft arraylarning birinchi elementining birinchi harflarini birlashtirib qaytarib bersin

const fruitesArray = [["Olma"],["Bexi"],["Anor"],["Xurmo"],["GIlos"],["Kiwi"],["Banan"],];

function handleFruitsArr(arr){
    let juftStr = '' ;
    for (let i = 0; i <= arr.length-1; i++) {
        for (let si = 0; si <= arr[i].length-1; si++) {
            if(arr[i][si].length % 2 == 0){
                juftStr += arr[i][si].at(0)
            }
        }
    };
    return juftStr ;
};
handleFruitsArr(fruitesArray)


