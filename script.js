function Soru(soruMetni, cevapSecenekleri, dogruCevap) {

    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {

    return cevap === this.dogruCevap;
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

function Quiz(sorular) {

    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function () {

    return this.sorular[this.soruIndex]

}

let quiz = new Quiz(sorular);


//let sorular = document.getElementsByClassName(".btn-soruGetir");  // aşağıdaki  tanımlamanın bir değişiği ikiside aynı aslında
document.querySelector(".btn_start").addEventListener("click", function () {

    document.querySelector(".quiz_box").classList.add("active");
    soruGoster(quiz.soruGetir());


})


function soruGoster(soru) {
    
    let question = ` <span> ${soru.soruMetni }</span>`;
    let options = '';

    for( let cevap in soru.cevapSecenekleri) {

        options += ` <div  class="option">
          <span> <b>${cevap} </b>: ${soru.cevapSecenekleri[cevap]}  </span>   
          </div>`;
    }
    document.querySelector(".question_text").innerHTML = question;
    document.querySelector(".option_list").innerHTML = options;

}

document.querySelector(".next-btn").addEventListener("click",function(){
    
    if (quiz.sorular != quiz.soruIndex + 1) {
        
        quiz.soruIndex += 1;    
        soruGoster(quiz.soruGetir());
    } else { 
        console.log("Quiz bitti.")
    }

})

