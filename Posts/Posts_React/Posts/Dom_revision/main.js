// examine the document object
// console.dir(document);
// console.log(document.all);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'hello'
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// getelementbyid
// console.log(document.getElementById('main-header'));
// var header = document.getElementById('header-title');
// header.textContent = 'Hello';
// header.innerText = 'Good';
// header.innerHTML = '<h3>Good</h3>';

// header.style.borderBottom = 'solid 3px #000'

// get element by classname
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // items.style.backgroundColor = 'grey';

// for(var i = 0; i< items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }


// var items = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // items.style.backgroundColor = 'grey';

// for(var i = 0; i< items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// QUERRYSELECTOR //

// var head = document.querySelector('#main-header');
// head.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'purple';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'grey';

// // QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';


// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i =0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

var itemList = document.getElementById('items');
console.log(itemList.parentNode);


