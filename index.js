console.log('1. Вёрстка валидная +10;\n2. Вёрстка семантическая +20\n3. Вёрстка соответствует макету +48\n4. Требования к css + 12\n5. Интерактивность, реализуемая через css +20.')

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

remove.onclick = function () {
  document.getElementById("myDropdown").classList.toggle("show");
  // document.getElementById("myDropdown").classList.toggle("wow");


}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function slideTwo() {
  document.getElementById("one").classList.toggle("none");
  document.getElementById("two").classList.toggle("none");
  document.getElementById("three").classList.toggle("none");
  document.getElementById("first").classList.toggle("selected");
  document.getElementById("second").classList.toggle("selected");
}

function slideFour() {
  document.getElementById("three").classList.toggle("none-prev");
  document.getElementById("four").classList.toggle("none-prev");
  document.getElementById("five").classList.toggle("none-prev");
  document.getElementById("third").classList.toggle("selected");
  document.getElementById("second").classList.toggle("selected");
}

function slideFive() {
  document.getElementById("three").classList.toggle("none-prev");
  document.getElementById("four").classList.toggle("none-prev");
  document.getElementById("five").classList.toggle("none-prev");
  document.getElementById("third").classList.toggle("selected");
  document.getElementById("second").classList.toggle("selected");
}

function prevB() {
  document.getElementById("img-mob1").classList.toggle("none-img");
  document.getElementById("img-mob2").classList.toggle("none-img");

}

function nextB() {
  document.getElementById("img-mob1").classList.toggle("none-img");
  document.getElementById("img-mob3").classList.toggle("none-img");

}


