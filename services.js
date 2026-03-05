document.querySelectorAll(".flip-card").forEach(card => {

card.addEventListener("click", function(){

this.querySelector(".flip-inner").classList.toggle("flip");

});

});