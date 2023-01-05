//Traversing the DOM

var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes)

//children
// console.log(itemList.children)
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//FirstChild
// console.log(itemList.firstChild);

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Helloo';

//LastChild
// console.log(itemList.lastChild);

// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Helloo';


//nextSibling
// console.log(itemList.nextSibling)

//nextElementSibling
// console.log(itemList.nextElementSibling)

//previousSibling
// console.log(itemList.previousSibling)

//previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color='pink';

//create a Div
var newDiv = document.createElement('div');

//Add class
newDiv.className='Hello';

//Add id
newDiv.id='Hello1';

//Add attribute
newDiv.setAttribute('title', 'HelloDiv');

//create text Node
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText)

//adding this div to DOM

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')

var listGroupItem = document.querySelector('div .list-group')
var ul = document.querySelector('div .list-group-item')

//listGroupItem.insertBefore(newDiv, h1)
listGroupItem.insertBefore(newDiv, ul)

console.log(newDiv);
//

//Task 7 done

