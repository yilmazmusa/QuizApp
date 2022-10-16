let quiz = new Quiz(sorular);
const ui = new UI();


//let sorular = document.getElementsByClassName(".btn-soruGetir");  // aşağıdaki  tanımlamanın bir değişiği ikiside aynı aslında
ui.btn_start.addEventListener("click", function () {
    ui.soruGoster(quiz.soruGetir());
    ui.quiz_box.classList.add("active");
    ui.soruSayisiniGoster(quiz.soruIndex+1,quiz.sorular.length);
    ui.btn_next.classList.remove("show");


})





ui.btn_next.addEventListener("click",function(){
    
    if (quiz.sorular.length != quiz.soruIndex + 1 ) {
        
        quiz.soruIndex += 1;    
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex+1,quiz.sorular.length);
        ui.btn_next.classList.remove("show");

    } else { 
        console.log("Quiz bitti.")
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
})


ui.btn_quit.addEventListener("click", function () {
    window.location.reload(); //Safyanı F5 yapmış g,b, yeniler.

})

ui.btn_replay.addEventListener("click", function () {
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click(); // Bir butona bastığında başka bir butonu bu şekilde tetikleriz.Burada btn_start yerine quiz_box ta yazabilirdik.
    ui.score_box.classList.remove("active");
})



function optionSelected(option) {

    let cevap = option.querySelector("span b").textContent;
    let soru =quiz.soruGetir();
    
   if(soru.cevabiKontrolEt(cevap.trim())) {
     quiz.dogruCevapSayisi +=1;
     option.classList.add("correct");
     option.insertAdjacentHTML("beforeend",ui.correctIcon);
     
   }

   else 
   {
    
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend",ui.incorrectIcon);
   }

   for (let i = 0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    
   }
    ui.btn_next.classList.add("show");
    
}



