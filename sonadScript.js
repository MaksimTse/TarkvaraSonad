
//sõnad eesti keeles
const sonad=[
    'teostus',
    'algoritm',
    'kavand',
    'kasutajaliides',
    'mudel',
    'andmebaasi skeem',
    'standart',
    'tsükkel',
    'andmetöötlus',
    'andmestruktuur',
    'arenduskeskkond',
    'projektihaldus tööriistad',
    'kavandamine',
    'iteratsioon',
    'parandus',
    'koskmudel',
    'agiilne mudel',
    'inkrementaalne mudel',
    'nõudmised',
    'realiseerimine',
    'testimine',
    'integreerimine',
    'kasutamine',
    'hooldus',
    'eelised',
    'puudused',
    'elutsükkel',
    'arendamine',
    'valideerimine'
];

//sõnad vene keeles
const venesonad=[
    "реализация",
    "алгоритм",
    "план",
    "пользовательский интерфейс",
    "модель",
    "схема базы данных",
    "стандарт",
    "цикл",
    "оброботка данных",
    "структруа базы данных",
    "среда разработки",
    "инструменты управления проектами",
    "планирование",
    "итерация",
    "исправление",
    "каскадная модель",
    "агильная модель",
    "инкрементальная модель",
    "требования",
    "реализация",
    "тестирование",
    "интегрирование",
    "использование",
    "обслуживание",
    "преимущества",
    "недостатки",
    "жизненный цикл",
    "разработка",
    "валидирование"
];
//juhuslik sõna funktsioon
function randomSona(){

    const juhuslikSona=Math.floor(Math.random()*sonad.length);

    //võtame juhuslik sõna massivist
    const sona=sonad[juhuslikSona];
    //lisame html lehele
    document.getElementById("random-sona").innerHTML = sona;
    window.correct= sona;
}
// kontrollime sõna
function checkSona(){
    const check = document.getElementById("kontroll").value.trim().toLowerCase();
    const correct = window.correct.toLowerCase();
    //sõna, mille isik kirjutas, teisendatakse väiketähtedeks ja kontrollitakse edasi
    const correctVene = venesonad[sonad.indexOf(correct)].toLowerCase();
    //kui õigesti kuvab õigesti ja vastupidi
    if (check === correct || check === correctVene) {
        document.getElementById("vastus").innerText = "Õige!";
    } else {
        document.getElementById("vastus").innerText = "Vale!";
    }
}