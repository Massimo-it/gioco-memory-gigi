// linked to game.html

let backChosen = sessionStorage.getItem("backChosen");
let myQtyCards = sessionStorage.getItem("myQtyCards");
let cardsToShow = [];

//shows the back of the cards in the chosen quantity

function showBackCards() {
	for (let i = 0; i < (myQtyCards * 2); i++) {
		let img = document.createElement('img');
		img.src = backChosen;
		img.classList.add("back");
		document.getElementById('cards').appendChild(img);
	}
}

showBackCards();

//rendom card saved in the array named randomGigiCards

let gigiCardsSource = ["cards/gigi1.svg", "cards/gigi2.svg", "cards/gigi3.svg", "cards/gigi4.svg", "cards/gigi5.svg", "cards/gigi6.svg", "cards/gigi7.svg", "cards/gigi8.svg"];
let gigiCards = gigiCardsSource.sort((a, b) => 0.5 - Math.random());

for (let i = 0; i < (myQtyCards); i++) {
    cardsToShow.push(gigiCards[i]);
    cardsToShow.push(gigiCards[i]);
    }
const randomGigiCards = cardsToShow.sort((a, b) => 0.5 - Math.random());  //shuffle the cards

// event that handles the click on the cards

const yourChoice = document.getElementsByClassName("back");
const hitCouple = document.getElementById("couple");
let sound = new Audio("toc.mp3");   
let couple=[], position=[];
let counterCouple = 0;

for (let i=0; i < yourChoice.length; i++) {
    yourChoice[i].addEventListener('click', function() {
	hitCouple.innerHTML = "";
    yourChoice[i].src = randomGigiCards[i];
	sound.play();
	couple.push(randomGigiCards[i]);
	position.push(i);
	
	if (couple.length == 2) {
		if (couple[0] == couple[1]) {
			counterCouple++;
			if (counterCouple == myQtyCards) {
				location.href = "finish.html";
			}
			hitCouple.innerHTML = "Hai fatto coppia!";  // here we made the couple
			let x = 0;
			  if (x == 0) {
				x = 1;
				let elem = document.getElementById("barr");
				let width = 1;
				let id = setInterval(frame, 10);
				function frame() {
				  if (width >= 100) {
					clearInterval(id);
					x = 0;
					yourChoice[position[0]].src = "cards/coppia.svg";
					yourChoice[position[0]].style.pointerEvents = "none";
					yourChoice[position[1]].src = "cards/coppia.svg";
					yourChoice[position[1]].style.pointerEvents = "none";
					couple.length = 0;
					position.length = 0;
				  } else {
					width++;
					elem.style.width = width + "%";
				  }
				}
			  }
		} else {
			
			hitCouple.innerHTML = "NON hai fatto coppia!";  //here we have not made the couple
			let x = 0;
			  if (x == 0) {
				x = 1;
				let elem = document.getElementById("barr");
				let width = 1;
				let id = setInterval(frame, 10);
				function frame() {
				  if (width >= 100) {
					clearInterval(id);
					x = 0;
					yourChoice[position[0]].src = backChosen;
					yourChoice[position[1]].src = backChosen;
					couple.length = 0;
					position.length = 0;
				  } else {
					width++;
					elem.style.width = width + "%";
				  }
				}
			  }
		}
	}
  });
}  

