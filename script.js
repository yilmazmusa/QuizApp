let quiz = new Quiz(sorular);
const ui = new UI();


//let sorular = document.getElementsByClassName(".btn-soruGetir");  // aşağıdaki  tanımlamanın bir değişiği ikiside aynı aslında
ui.btn_start.addEventListener("click", function () {
    startTimerLine();
    ui.soruGoster(quiz.soruGetir());
    ui.quiz_box.classList.add("active");
    startTimer(10);
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");


})





ui.btn_next.addEventListener("click", function () {
    

    if (quiz.sorular.length != quiz.soruIndex + 1) {

        quiz.soruIndex += 1;
        clearInterval(counter);
        startTimer(10);
        clearInterval(counterLine);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");

    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
})


ui.btn_quit.addEventListener("click", function () {
    window.location.reload(); //Safyanı F5 yapmış gibi yeniler.

})

ui.btn_replay.addEventListener("click", function () {
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click(); // Bir butona bastığında başka bir butonu bu şekilde tetikleriz.Burada btn_start yerine quiz_box ta yazabilirdik.
    ui.score_box.classList.remove("active");
})



function optionSelected(option) {
    
    clearInterval(counter); /* BİR SEÇENEK SÜRE BİTMEDEN SEÇİLDİĞİNDE ONA GÖRE İŞLEM YAPILACAK */
    clearInterval(counterLine); /* BİR SEÇENEK SEÇİLDİĞİNDE YATAY AKAN TİME_LİNE DURMASI İÇİN */
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();
    


    if (soru.cevabiKontrolEt(cevap.trim())) {
        quiz.dogruCevapSayisi += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);

    } else {

        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");

    }
    ui.btn_next.classList.add("show");

}


let counter; /* SetInterval'in referansını buna vericez aşağıda. */
function startTimer(time) {
    counter = setInterval(timer, 1000); /*setInterval metodu timer metodunu 1 saniyede bir çağıracak */

    function timer() {
        // console.log(time)
        ui.time_second.textContent = time;
        time--; /* sürekli bir bir azalacak.*/

        if (time < 0){
            
            clearInterval(counter); /* Temizlenece olan Interval'in referansını verdik.*/
            ui.time_text.textContent ="Süre Bitti.";

           let cevap = quiz.soruGetir().dogruCevap;

           for (let option of ui.option_list.children) {

            if(option.querySelector("span b").textContent.trim() == cevap) {
            option.classList.add("correct");
            option.insertAdjacentHTML("beforeend", ui.correctIcon);
            ui.btn_next.classList.add("show");
            }
            option.classList.add("disabled");
           }
           
        }
        
    }

}


let counterLine;
function startTimerLine() {
    let line_width = 0;
    counterLine = setInterval(timer,20);

    function timer() {
        line_width +=1;
        ui.time_line.style.width = line_width + "px";

        if (line_width > 545 ) {

            clearInterval(counterLine);
        }
    }

    

}