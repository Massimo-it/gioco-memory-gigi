// choice of the back of the card

let backChosen = "", myQtyCards="";

const backCard = document.getElementsByClassName("back-main");

for (let i=0; i < backCard.length; i++) {
	backCard[i].addEventListener('click', function() { 
	closeBorder();
	backChosen = backCard[i].src; //backChosen has the name of the file of the back chosen
	backCard[i].style.border = "3px solid red";
	sessionStorage.setItem("backChosen", backChosen);
  });
}

function closeBorder() {
  for (let i=0; i < backCard.length; i++) {
	backCard[i].style.border = "3px solid white";
  }
}

// radio input for the choice of the quantity of cards

let submitClicked = document.getElementById("submit");

submitClicked.addEventListener('click', function() {

	let qtyCards = document.getElementsByName("qtyCards");
	if (backChosen == "") {
		alert("non hai scelto con quale retro della carta vuoi giocare");
	} else {
		for (let i=0; i < qtyCards.length; i++) {
			let qtyCardsChosen = qtyCards[i];
			if (qtyCardsChosen.checked) {
				let myQtyCards = qtyCardsChosen.value;
				sessionStorage.setItem("myQtyCards", myQtyCards);
				location.href = "game.html";
			} 
		}
	}
});
