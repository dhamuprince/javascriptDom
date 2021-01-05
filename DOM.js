
// different ways
document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = 'red';

//assign to a varible

const element = document.getElementById('element');
//do something
document.querySelector('element');
//do something

// window object
//console.log(window);


// returns a node object or a node list, which is an array-like object


const btn = document.getElementById('btn');
const name = btn.nodeName;
const css = btn.style;

console.log(btn);
console.log(name);
console.log(css);  


// window object = browser api
// document
// console.dir

window.alert('hello');
console.log(window);
console.log(document);

console.dir(document);


// select the element or group of elements the  we want
// decide the effect we want to apply to the selection

//getElementById('element')

  const h1 = document.getElementById('title');
  h1.style.color ='red';
  
  const btn = document.getElementById('btn');

  btn.style.backgroundColor = 'blue';
  btn.style.color = 'white';

//   document.getElementById('btn').style.backgroundColor = 'blue';
//   document.getElementById('btn').style.color = 'white';

//getElementByTagName('tagname');
// node-list = array-like object
// index, length property but not array methods

const headings = document.getElementsByTagName('h2');
console.log(headings); // node list = array like object

headings[0].style.color = 'red';
console.log(headings.length);

const items = document.getElementsByTagName('li');
// it throws an error items is not a array
// items.forEach(element => {
//     console.log(element);
// });
items[2].style.color = 'orange';
const better = [...items];
better.forEach(item=>{
    // console.log(item)
})

console.log(items)
console.log(better);


// getElementByClassName('classname');

// node-list = array-like object
// index, length property but not array methods

const listitems = document.getElementsByClassName('special');
console.log(listitems);

listitems[1].style.color ='blue';


// querySelector('any css'); - selects single
// querySelector('any css') - select all


<ul id ='result'>
    <li class='special'>apple</li>
    <li>banana</li>
    <li class='special'>pear</li>
    <li>tomato</li>
    <li class='special last'>orange</li>
</ul>

const result = document.querySelector('#result');

result.style.backgroundColor ='blue';

const item = document.querySelector('.special');

console.log(item);

const lastItem = document.querySelector('li:last-child');

console.log(lastItem);

const alllist = document.querySelectorAll('.special');
console.log(alllist);

alllist.forEach((i)=>{
  console.log(i);
  item.style.color = 'yellow';
});


// ChildNodes - returns all childNodes including whitespace
// which is treated as a text node 

// children
// firstchild
// lastchild

const final = document.querySelectorAll('#result');
// children
const alllchildren = result.childNodes;
console.log(alllchildren);

const children = result.children;

console.log(children);

console.log(result.firstChild);
console.log(result.lastChild);



// parentElement

<div id ='result'>
  <h1>hello world</h1>
  <div class='second'>
    <h2>second heading</h2>
  </div>
</div>


const headings = document.querySelector('h2');
console.log(headings.parentElement.parentElement);

const parent = headings.parentElement;
parent.style.color = 'red';

// previousSibling
// nextSibling
// return whitespace


<ul id='result'>
  <li class='first'>first</li>
  <li>list item 2</li>
  <li>list item 3</li>
  <li id ='last'>last</li>

</ul>


const first = document.querySelector('.first');
console.log(first);

const second  = first.nextSibling; // it returns whitespace
const second = first.nextSibling.nextSibling.style.color = 'red'; // it return next item
console.log(second);


const last = document.querySelector('#last');

const third = last.previousSibling.previousSibling;
console.log(third);
console.log(last.nextSibling.nextSibling);

// previousElementSibling
// nextElementSibling

const first = document.querySelector('.first');
first.nextElementSibling.style.color = 'red';
const last = document.querySelector('#last');


// nodeValue
// textContent

<h1 id='special'>this is special content</h1>


const content = document.getElementById('special');
const value = content.firstChild.nodeValue;
console.log(content.firstChild.nodeValue);
console.log(content.childNodes[0].nodeValue) // return content
// console.log(value); return null



const easyValue = item.textContent;
console.log(easyValue);

// getAttribute();
// setAttribute();


<ul>
  <li class='first' id ='special'>i have class of first</li>
  <a href='first.html' id='link'>random link</a>
  <li>i have no atrributes</li>
</ul>

const first  = document.querySelector('.first');
const idValue = first.getAttribute('id')
// console.log(idValue)

const link = document.getElementById('link');
const showlink = link.getAttribute('href');
console.log(showlink);


// dynamically set the attribute

const lastitem = link.nextElementSibling;
lastitem.setAttribute('class', 'first');

lastitem.textContent = 'i also have a class of first';
console.log(last);


const links = document.querySelectorAll('.first');
console.log(links);



// how we can add css class dynamically


<style>
  .colors{
    background:red;
    color:white;
  }
  .text {
    font-size:2rem;
    letter-spacing:1rem;
  }
</style>

<h1 id='first'class='colors'>i'm first element</h1>
<h1 id='second'>i'm second element</h1>
<h1 id='third'>i'm third element</h1>



// className

// classList


const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const classValue = first.className;
console.log(classValue);

second.className = 'colors';
second.className = 'text';


third.classList.add('colors');
third.classList.add('text');
third.classList.add('text','colors');
third.classList.remove('text');

let results = third.classList.contains('colors');
if(resuts){
  console.log('hello world');
}
else{
  console.log('does not have the class')
}


const classVal = third.classList;
console.log(classVal)




// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

<style>
  .red{
    background:red;
    color:white;

  }
  .blue{
    background:blue;
    color:white;
  }
</style>


<div id='result'>
  <h1 class='red'>i'm the child of result</h1>
</div>


const result = document.querySelector('result');

// create empty element

const bodyDiv = document.createElement('div');
// create text node

const text = document.createTextNode('a simple body div');

bodyDiv.appendChild(text);
document.body.append(bodyDiv);

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');
result.appendChild(heading);

console.log(result.children);


// insertBefore('element', 'location')


 const result = document.querySelector('#result');
 const first = document.querySelector('.red');

 //create empty element

 const bodyDiv = document.createElement('div');
 // create text node 
 const text = document.createTextNode('a simple body div');
 bodyDiv.appendChild(text)
 document.body.insertBefore(bodyDiv,result);
 // result element
 const heading = document.createElement('h1');
 const headingText = document.createTextNode('dynamic heading');
 heading.appendChild(headingText);
 heading.classList.add('blue');

 result.insertBefore(heading, first);

// replaceChild('new', 'old');

const smallHeading = document.createElement('h6');
const smallTExt = document.createTextNode('im small heading');

smallHeading.classList.add('red');
smallHeading.appendChild(smallTExt);
document.body.replaceChild(smallHeading, bodyDiv);


// prepend

// innerText

const heading = document.createElement('h1');
heading.innerText = 'im a dynamic heading';
document.body.prepend(heading);


// remove
// removeChild

const reuslt = document.querySelector('#result');
result.remove();

const heading = result.querySelector('h1');
result.removeChild(heading);

const heaind = document.querySelector('h1');
console.log(heaind);


// innerHTML
// textContent

<ul if='first'>
  <li class='item'>list item</li>
  <li>list item</li>
</ul>
<div id='second'>
  i have some text content
</div>



const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(div.textContent);

console.log(list.innerHTML);

const ul = document.createElement('ul');
ul.innerHTML = `<li></li>`



































