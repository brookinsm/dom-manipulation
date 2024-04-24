//how to grab elements by id
const titleEl = document.getElementById('title');

//grab element using css selector
const contentEl = document.querySelector('p.content');

//ways to change content of element
titleEl.innerText = 'ToDo List';
//titleEl.innerText = 'ToDo <span class="purple-text">List<span>';
titleEl.innerHTML = 'ToDo <span class="purple-text">List<span>';

//How to style elments via style property
contentEl.style.fontSize = '24px';
contentEl.style.border = 'dotted 2px green';

//How to access and modify attributes of elements
document.querySelector('a').setAttribute('href', 'https://www.google.com');

//addig classes
contentEl.classList.add('a-new-class', 'flex');

//remove classes
contentEl.classList.remove('a-new-class', 'flex', 'cool');

//toggle class
contentEl.classList.toggle('paragraph');

//select multiple elements
const liEls = document.querySelectorAll('ul.list > li');
liEls.forEach((li) => (li.style.fontSize = '36'));

