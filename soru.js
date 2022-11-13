function Soru(soruMetni, cevapSecenekleri, dogruCevap) {

    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {

    return  this.dogruCevap === cevap.trim();
}



let sorular = [

    new Soru("1-Hangisi Javascript paket yonetim uygulamasidir ?", {
        a: "Node.js",
        b: "TypeScript",
        c: "Npm",
        d: "Nuget"
    }, "c"),
    new Soru("2-Hangisi Javascript paket yonetim uygulamasidir ?", {
        a: "Node.js",
        b: "Nuget",
        c: "Spring"
    }, "c"),
    new Soru("3-Hangisi Javascript paket yonetim uygulamasidir ?", {
        a: "Node.js",
        b: "Nuget",
        c: "Spring"
    }, "c"),
    new Soru("4-Hangisi C# paket yonetim uygulamasidir ?", {
        a: "Node.js",
        b: "Nuget",
        c: "Spring",
        d: "TypeScript"
    }, "c")

];