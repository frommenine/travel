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


function orderUSA() {
  // document.getElementById("orderUSA").classList.toggle("changeOrder");
  // document.getElementById("orderJapan").classList.toggle("changeOrder2");

  // var itemListParent = document.querySelector('.destinations__img-wrap');
  // var itemList = document.querySelectorAll('.slide-img');
  // сработает как appendChild (т.к. второй аргумент null) - поместит второй элемент в конец родительского.
  // itemListParent.insertBefore(itemList[1], null);
  // сработает как того предполагает insertBefore() - вставит пятый элемент перед первым
  // itemListParent.insertBefore(itemList[3], itemList[0]);

}

// function order1() {
//   var itemListParent = document.querySelector('.destinations__img-wrap');
//   var itemList = document.querySelectorAll('.slide-img');
//   itemListParent.insertBefore(itemList[0], null);
//   itemListParent.insertBefore(itemList[2], itemList[0]);
// }


function slideTwo() {
  document.getElementsByClassName("destinations__img")[2].style = "transform: translateX(612px)";;
  document.getElementsByClassName("destinations__img")[1].style = "transform: translateX(612px)";;

}
 