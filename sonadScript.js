//eesti sõnade massiiv
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
//vene sõnade massiiv
const venesonad=[
    "внедрение",
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
// See funktsioon valib juhusliku sõna eesti keelest
function randomSona(language){
    const juhuslikSona = Math.floor(Math.random() * sonad.length);
    const sona = sonad[juhuslikSona];
    const veneSona = venesonad[juhuslikSona];

    if (language === 'eesti') {
        document.getElementById("random-sona-eesti").innerHTML = sona;
        window.correct = sona;
    } else if (language === 'vene') {
        document.getElementById("random-sona-vene").innerHTML = veneSona;
        window.correct = veneSona;
    }
}
// See funktsioon kontrollitakse kas sõna on tõlkitud õigesti
function checkSona(language){
    const check = document.getElementById("kontroll-" + language).value.trim().toLowerCase();
    const correct = window.correct.toLowerCase();

    if (language === 'eesti') {
        // Kontrollitakse kas kasutaja sisestatud vastus vastab õigele venekeelsele sõnale
        const correctVene = venesonad[sonad.indexOf(correct)].toLowerCase();
        if (check === correctVene) {
            // Kui vastus on õige, siis kuvatakse "Õige!"
            document.getElementById("vastus-eesti").innerText = "Õige!";
        } else {
            // Kui vastus on vale, siis kuvatakse "Vale!"
            document.getElementById("vastus-eesti").innerText = "Vale!";
        }
    } else if (language === 'vene') {
        // Kontrollitakse kas kasutaja sisestatud vastus vastab õigele eestikeelsele sõnale
        const correctEesti = sonad[venesonad.indexOf(correct)].toLowerCase();
        if (check === correctEesti) {
            // Kui vastus on õige, siis kuvatakse "Правильно!"
            document.getElementById("vastus-vene").innerText = "Правильно!";
        } else {
            // Kui vastus on vale, siis kuvatakse "Неправильно!"
            document.getElementById("vastus-vene").innerText = "Неправильно!";
        }
    }
}
