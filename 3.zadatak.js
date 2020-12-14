// Написати програм који рачуна просечну вредност бројева између N и M (укључујући оба):

// Просечна вредност свих бројева
// Просечна вредност бројева који садрже цифру 2
// Напомена:

// Уместо ставке 2 - Просечна вредност бројева дељивих са 3 - 75% поена

// let N = 194
// let M = 3
// Просек свих бројева је: 98.5
// Просек бројева са цифром 2 је: 88.75675675675676

let N = 194
let M = 3

let Zbir = 0
let C = 0

if(N > M){
    let tmp = N
    N = M
    M = tmp
}

for(let i = N; i <= M; i++){
    Zbir += i
    C++
}

let Prosek = Zbir / C

console.log(`Prosek je: ${Prosek}`);

let Zbir1 = 0
let C1 = 0

for(let j = N; j <= M; j++){
    if(j % 3 == 0){
            Zbir1 += j
            C1++
        }
}
let Prosek3 = Zbir1 / C1

console.log(`Prosek deljiv sa 3 je: ${Prosek3}`);
