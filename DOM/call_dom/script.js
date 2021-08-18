/*
  -> dom selector
      querySelector(),
      getElementById(),
      getElementByClass(),

      querySelectorAll(),
      getElementByTagName()
    
  -> modify dom element
  -> DOM traversing
*/

let a = document.getElementsByClassName("h1");
console.log(a);

let b = document.getElementById("age");
console.log(b); // <div id="age">age: 10</div>

let c = document.getElementsByClassName("name");
console.log(c); // HTMLCollection [div.name]

/* querySelector()
  tag: 'name'
  class: '.name'
  id: '#name'
*/

let m = document.querySelector("h1");
console.log(m); // <h1>hellow</h1>

let n = document.querySelector("#age");
console.log(n); // <div id="age">age: 10</div>

let p = document.querySelector(".name");
console.log(p); // <div class="name">forhad</div>

/*  querySelectorAll()
      tag: 'name'
      class: '.name'
      id: '#name'
*/

let x = document.querySelectorAll("li");
console.log(x); // NodeList(3) [li#item.item, li#item.item, li#item.item]

let y = document.querySelectorAll(".item");
console.log(y); // NodeList(3) [li#item.item, li#item.item, li#item.item]

let z = document.querySelectorAll("#item");
console.log(z); // NodeList(3) [li#item.item, li#item.item, li#item.item]

//------------------------------------------------------------------
/// modify dom element
const book = document.querySelector(".book");
book.textContent = "What is js";
book.className = "book-1";
book.id = "boi-1";
console.log(book); //     <div class="book-1" id="boi-1">What is js</div>

book.style.color = "red"; // text color become red
book.style.fontSize = "2rem"; // text size = 2rem

// modify input attribute
const input = document.querySelector("input");

console.log(input.value); // abc

input.value = "xxx";
console.log(input.value); // xxx

input.setAttribute("value", "ppp");
console.log(input.value); // xxx
input.value = input.getAttribute("value");
console.log(input.value); // ppp

//--------------------------------------------------------------
// Dom traversing

/**
  childNodes = include text node
  children = include only html
 */
const ul = document.querySelector("ul");
console.log(ul.childNodes); // NodeList(7) [text, li#item.item, text, li#item.item, text, li#item.item, text]
console.log(ul.children); // HTMLCollection(3) [li#item.item, li#item.item, li#item.item]

console.log(ul.childNodes[2]); //  #text
console.log(ul.children[2]); //  <li class="item item-2" id="item">i 2</li>

// single first child
console.log(ul.firstChild); //  #text
console.log(ul.firstElementChild); // <li class="item item-1" id="item">i 1</li>

// single last child
console.log(ul.lastChild); //  #text
console.log(ul.lastElementChild); // <li class="item item-3" id="item">i 3</li>

/**
  parentNode, parentElement = similar output
 */

const l = document.querySelector(".item");

console.log(l.parentNode); // <ul>...</ul>
console.log(l.parentElement);
console.log(l.closest("body")); // <body>...</body>

/**
  previousSibling, previousElementSibiling
  nextSibling, nextElementSibiling
 */

const l2 = document.querySelector(".item-2");

console.log(l2.previousSibling); // #text
console.log(l2.previousElementSibling); // <li class="item item-1" id="item">i 1</li>

console.log(l2.nextSibling); // #text
console.log(l2.nextElementSibling); // <li class="item item-3" id="item">i 3</li>
