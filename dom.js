const h1 = document.getElementById('para');
h1.className = "head";
h1.classList.add('headcls');
h1.classList.contains('head');

h1.setAttribute('className', 'newClass');

const li = document.querySelectorAll('ul li');
const li1 = document.querySelector('.item-1');
li.forEach(li => li.style.color ='red')

const lastList = document.querySelector('ul li:first-child');
lastList.style.color = 'green';

const ul = document.querySelector('ul');

ul.children;//only html document excluding text nodes.
ul.childNodes; //including text nodes.

ul.parentElement ; //parentElement
ul.parentNode ; 
ul.closest('body');

ul.previousSibling; //previous sibling ->> text node
ul.previousElementSibling; //h1
// const div = document.body.firstElementChild.style.backgroundColor = "#eee";
const nextLi = document.body.firstElementChild.firstElementChild.nextElementSibling;

const button = document.querySelector('button');
const div = document.querySelector('div');

div.insertAdjacentHTML('beforeend', '<p>this</p>');
// div.insertAdjacentElement('beforeend', element)
button.addEventListener('click', () => {
   div.classList.toggle('background') ;
});

// const newli = document.createElement('li')​;
// ul.appendChild(newli); ---->insert node
//ul.append(li); -----> insert Htmlelements,textcontent 
// newli.textContent = 'this is getting exciting';
let nl1 = li1.cloneNode(true)//true for enabling deepcopy
// undefined
ul.firstElementChild.append(nl1)

//data-attribute;
const dataButton = document.querySelector('[data-add]');
dataButton.dataset;
dataButton.dataset.remove = "please remove the button";

let curElementNumber = 0;
 
function scrollHandler() {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;
   
    if (distanceToBottom < document.documentElement.clientHeight + 150) {
        const newDataElement = document.createElement('div');
        curElementNumber++;
        newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
        document.body.append(newDataElement);
    }
}
 
window.addEventListener('scroll', scrollHandler);