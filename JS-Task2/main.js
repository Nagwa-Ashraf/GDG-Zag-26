let element = document.getElementById("elzero");
let element2 = document.getElementsByClassName("element")[0];
let element3 = document.getElementsByTagName("div")[0];
let element4 = document.querySelector("#elzero");
let element5 = document.querySelector(".element");
let element6 = document.querySelector("div");
let element7 = document.querySelector("[name='js']");
let element8 = document.querySelectorAll("#elzero")[0];
let element9 = document.querySelectorAll(".element")[0];
let element10 = document.querySelectorAll("div")[0];
let element11 = document.body.firstElementChild;
let element12 = document.body.children[0];
let element13 = document.body.childNodes[1];
let element14 = document.body.firstChild.nextSibling;
let element15 = document.body.children.item(0);
console.log(element);

let images = document.images;

for (let i = 0; i < images.length; i++) {
  images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  images[i].alt = "Elzero Logo";
}

let input = document.querySelector("input");
let result = document.querySelector(".result");

input.oninput = function () {
  let dollar = input.value;
  let egp = dollar * 15.6;

  result.innerHTML = `{${dollar}} USD Dollar = {${egp.toFixed(2)}} Egyptian Pound`;
};

let divs = document.querySelectorAll(".one, .two");

let firstText = divs[0].innerHTML;
let secondText = divs[1].innerHTML;

let firstTitle = divs[0].title;
let secondTitle = divs[1].title;

divs[0].innerHTML = secondText;
divs[1].innerHTML = firstText + " 2";

divs[0].title = secondTitle;
divs[1].title = firstTitle;

let images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {

  if (images[i].hasAttribute("alt")) {
    images[i].setAttribute("alt", "Old");
  } else {
    images[i].setAttribute("alt", "Elzero New");
  }

}
let form = document.querySelector("form");
let results = document.querySelector(".results");

form.onsubmit = function (e) {
  e.preventDefault();

  results.innerHTML = "";

  let elements = document.querySelector("[name='elements']").value;
  let text = document.querySelector("[name='texts']").value;
  let type = document.querySelector("[name='type']").value;

  for (let i = 1; i <= elements; i++) {

    let element = document.createElement(type);
    element.textContent = text;
    element.className = "box";
    element.title = "Element";
    element.id = `id-${i}`;

    results.appendChild(element);
  }
};