mapa = ["/////////////////////////////////////////////////",
	"/_______________________________________________/",
	"/_______________________________________________/",
	"/______**o________***________________**W________/",
	"/_________________***_________________*_________/",
	"/_________________*______________*______________/",
	"/_________________*_____________________*_______/",
	"/____*__*_____________________*___*_____*_______/",
	"*_____*_*____________________****_*_____________/",
	"*_____*_________________________________*_______/",
	"*______________________________________**_______/",
	"*________________________**____________**_______/",
	"/_________________________*_____________________/",
	"/_____________**_*_______***____________________/",
	"/_____________***_______________________________/",
	"/_____________**__________________**____________/",
	"/______**_________________________**____________/",
	"/______**_________________________*_____________/",
	"/________*____________**________________________/",
	"/____________________***________________________/",
	"/___________________*_**________________________/",
	"/_______________________________________________/",
	"/////////////////////////////////////////////////"];

mapa2 = ["/////////////////////////////////////////////////",
	"/____*_______________________________*__________/",
	"/______________________________W___*_______*____/",
	"/______***________***______________o________*___/",
	"/_________________***_______________________*___/",
	"/_______________***______________*______________/",
	"/__*____________________________________*_______/",
	"/_______*_____________________*___*_____*_______/",
	"/_____*_*____________________****_*_____________/",
	"/_____*__________***____________________*_______/",
	"/______________________________________**_______/",
	"/________________________**____________**_______/",
	"/_________________________*_________________*___/",
	"/_***____*____**_*_______***____________________/",
	"/___*_________***_______________________________/",
	"/____*________**__________________*_____________/",
	"/______**_________________________*_____________/",
	"/______**_____________*___________*_____________/",
	"/________*__________________________________*___/",
	"/__*________________________________****___*____/",
	"/___**____*_________*_**________________________/",
	"/_______________________________________________/",
	"/////////////////////////////////////////////////"];

var tablero = document.getElementById("game");
var start = document.getElementById("start");
var instructions = document.getElementById("instr");
var arrayCelda = new Array(mapa.length);

for (var i = 0; i < arrayCelda.length; i++) {
	arrayCelda[i] = new Array(mapa[0].length);
}

start.addEventListener("click", function () {
	var menu = document.getElementById("menu");
	menu.style.display = "none";
	dibujarTablero();
});

instructions.addEventListener("click", function () {
	var menu = document.getElementById("menu");
	var instr = document.getElementById("instrucciones");
	menu.style.display = "none";
	instr.style.display = "block";
});

function dibujarTablero() {
	var tabla = document.createElement("table");
	tabla.border = "1";
	for (var i = 0; i < mapa.length; i++) {
		var filas = document.createElement("tr");
		/*filas.style.width = "50px";
		filas.style.height = "50px";*/
		for (var j = 0; j < mapa[i].length; j++) {
			var celda = document.createElement("td");
			/*celda.style.width = "50px";
			celda.style.height = "50px";*/
			if (mapa[i][j] == "*") {
				celda.setAttribute('class', 'pared');
			}
			else if (mapa[i][j] == "o") {
				var img = document.createElement("img")
				celda.setAttribute('class', 'white');
				//img.setAttribute("class", "imagenes");
				img.src = "assets/img/mummy.png";
				img.style.width = "35px";
				img.style.height = "40px";
				celda.appendChild(img);
				objtCelda = {
					td: celda, x: i, y: j
				}

			}
			else if (mapa[i][j] == "W") {
				var img = document.createElement("img");
				img.src = "assets/img/sarcophagus.png";
				img.style.width = "35px";
				img.style.height = "40px";
				celda.appendChild(img);
				celda.setAttribute("class", "finish");
			}
			else {
				celda.setAttribute('class', 'white');
			}
			filas.appendChild(celda);
			arrayCelda[i][j] = celda;
		}
		tabla.appendChild(filas);
	}
	tablero.appendChild(tabla);
}

var img = document.createElement("img");
document.addEventListener("keydown", function (e) {
	e.preventDefault();
	if (e.keyCode >= 37 && e.keyCode <= 40) {
		if (e.keyCode == 39) { //right
			console.log("presione derecha");
			while (mapa[objtCelda.x][objtCelda.y + 1] == "_") {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				objtCelda.td = arrayCelda[objtCelda.x][objtCelda.y + 1];
				objtCelda.y = objtCelda.y + 1;
				//img.setAttribute("class","imagenes");
				img.src = "assets/img/mummy.png";
				img.style.width = "30px";
				img.style.height = "40px";
				objtCelda.td.appendChild(img);
			}
			if (mapa[objtCelda.x][objtCelda.y + 1] == "/") {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				alert("You lose!!!");
				borrarTable();
				dibujarTablero();
			} else if (mapa[objtCelda.x][objtCelda.y + 1] == "W") {
				alert("you win!!");
				tablero.innerHTML = "";
				var btnNext = document.createElement("button");
				var content = document.createTextNode("Next Level");
				btnNext.appendChild(content);
				tablero.appendChild(btnNext);
			}
		}
		if (e.keyCode == 37) { //left
			while (mapa[objtCelda.x][objtCelda.y - 1] == "_") {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				objtCelda.td = arrayCelda[objtCelda.x][objtCelda.y - 1];
				objtCelda.y = objtCelda.y - 1;
				//img.setAttribute("class","imagenes");
				img.src = "assets/img/mummy.png";
				img.style.width = "30px";
				img.style.height = "40px";
				objtCelda.td.appendChild(img);
			}
			if (mapa[objtCelda.x][objtCelda.y - 1] == "/") {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				alert("You lose!!!");
				borrarTable();
				dibujarTablero();
			}
			else if (mapa[objtCelda.x][objtCelda.y - 1] == "W") {
				alert("you win!!");
				tablero.innerHTML = "";
				var btnNext = document.createElement("button");
				var content = document.createTextNode("Next Level");
				btnNext.appendChild(content);
				tablero.appendChild(btnNext);
			}
		}
		if (e.keyCode == 38) { //up
			//miTaxi.up();
			while (mapa[objtCelda.x - 1][objtCelda.y] == "_") {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				objtCelda.td = arrayCelda[objtCelda.x - 1][objtCelda.y];
				objtCelda.x = objtCelda.x - 1;
				//img.setAttribute("class","imagenes");
				img.src = "assets/img/mummy.png";
				img.style.width = "30px";
				img.style.height = "40px";
				objtCelda.td.appendChild(img);
			}
			if (mapa[objtCelda.x - 1][objtCelda.y] == "/") {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				alert("You lose!!!");
				borrarTable();
				dibujarTablero();
			}
			else if (mapa[objtCelda.x - 1][objtCelda.y] == "W") {
				alert("you win!!");
				tablero.innerHTML = "";
				var btnNext = document.createElement("button");
				var content = document.createTextNode("Next Level");
				btnNext.appendChild(content);
				tablero.appendChild(btnNext);
			}
		}
		if (e.keyCode == 40) { //down 
			while (mapa[objtCelda.x + 1][objtCelda.y] == "_") {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				objtCelda.td = arrayCelda[objtCelda.x + 1][objtCelda.y];
				objtCelda.x = objtCelda.x + 1;
				//img.setAttribute("class","imagenes");
				img.src = "assets/img/mummy.png";
				img.style.width = "30px";
				img.style.height = "40px";
				objtCelda.td.appendChild(img);
			}
			if (mapa[objtCelda.x + 1][objtCelda.y] == "/") {
				objtCelda.td.removeChild(objtCelda.td.firstChild);
				alert("You lose!!!");
				borrarTable();
				dibujarTablero();
			} else if (mapa[objtCelda.x + 1][objtCelda.y] == "W") {
				alert("you win!!");
				tablero.innerHTML = "";
				var btnNext = document.createElement("button");
				var content = document.createTextNode("Next Level");
				btnNext.appendChild(content);
				tablero.appendChild(btnNext);
			}
		}
	} else {
		return false;
	}
});

function borrarTable() {
	tablero.innerHTML = '';
}

var back = document.getElementById("back");
back.addEventListener("click", function(){
	var menu = document.getElementById("menu");
	var instr = document.getElementById("instrucciones");
	menu.style.display = "block";
	instr.style.display = "none";
	
});