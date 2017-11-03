////Using getElementById method to change the color of a line
//const myHeading = document.getElementsByTagName('h1')[0];
//const myButton = document.getElementById('myButton');
//const myTextInput = document.getElementById('myTextInput');
//
//myButton.addEventListener('click', () => {
//   myHeading.style.color = myTextInput.value;
//});

////Using getElementsByTagName method to change color in multiple lines
//const myList = document.getElementsByTagName('li');
//
//for (let i = 0; i < myList.length; i++) {
//  myList[i].style.color = 'purple';
//}
//
////Selecting the CSS nth-child odd method
//const evens = document.querySelectorAll('li:nth-child(odd)');
//
//for (let i = 0; i < evens.length; i++) {
//  evens[i].style.backgroundColor = 'lightgray';
//}

//Swapping content from document and hiding it
//Adding new items
const toggleList = document.getElementById('toggleList')
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';                                   
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];                               
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];                               
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});

















