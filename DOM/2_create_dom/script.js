/* Createe element

      -> Html string:  
            - innerHTML           // this render full page for chnage
            - insertAdjacentHTML()  // try to use this 
                  |- beforebegin, afterbegin, beforeend, afterend

      -> createElement():
            - appendChild() / append()
            - prepend(), before(), after(), insertBefore()
            - replaceChild(), replaceWith()

      -> cloning node
      -> REMOVE node
*/

//html string
const div = document.querySelector("div");

//div.innerHTML = div.innerHTML + "<h2>hello</h2>"; // this is not good practice

div.insertAdjacentHTML("beforeend", "<p>bro</p>");

//-----------------------------------------------------
// createElement()

const ul = document.querySelector("ul");

// append(), appendChild()
const l2 = document.createElement("li");
l2.textContent = "item 2";
l2.style.color = "red";
//ul.appendChild(l2);
ul.append(l2); // direct text can be added : ul.append('hi')

// prepend()
const l3 = document.createElement("li");
l3.textContent = "item 3";
ul.prepend(l3);

// before()
const l4 = document.createElement("li");
l4.textContent = "item 4";
ul.lastElementChild.before(l4);

// after()
const l5 = document.createElement("li");
l5.textContent = "item 5";
ul.lastElementChild.after(l5);

/// replace with
const h1 = document.querySelector("h1");
const p = document.createElement("p");
p.textContent = "hello paragraph";
h1.replaceWith(p);

//-----------------------------------------------------
// cloning node

const l = document.createElement("li");
l.textContent = "xxxx";
const l6 = l.cloneNode(true);
const l7 = l.cloneNode(true);

ul.append(l6, l7);

//-----------------------------------------------------
// remove node
const h2 = document.querySelector("h2");
h2.remove();
