// Написати функцију racun(cena,dan,penzioner)

// cena - Број већи од 0 - Проверити исправност (Функција враћа -1 ако је неисправно)
// dan - Број између 1 и 7 (означава дане у недељи) - Без провере
// penzioner - true / false (означава да ли је купац пензионер) - Без провере

// Функција враћа рачун на следећи начин:

// Ако је купац пензионер и недеља је: попуст од 25%
// Ако је купац пензионер и није недеља: попуст од 10%
// Ако купац није пензионер и среда је: попуст од 10%
// Ако купац није пензионер и није среда: нема попуста

// Рад без функције - 70% поена
// Рад без Boolean информације (penzioner) - 70% поена


let cena = 150
let dan = 7
let penzioner = true
let racun = 0

if(penzioner = true){
    if(dan == 7){
        racun = cena * 0.75 + ', popust 25 %'
    }
    else{
        racun = cena * 0.90 + ', popust 10 %'
    }
}
if(penzioner == false){
    if(dan == 3){
        racun = cena * 0.90 + ', popust 10 %'
    }
    else{
        racun = cena + ', nema popusta'
    }
}
console.log(`Racun je: ${racun}`);
