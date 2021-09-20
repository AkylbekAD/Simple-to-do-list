//1. select all elements from html
const form = document.querySelector('#new-item-form');
const list = document.querySelector('#list');
const input = document.querySelector('#item-input');
//2. when i submit form add na new element
//1. create new element
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const item = document.createElement('p');
  item.innerText = input.value;
  item.classList.add('list-item');
  //2. add new element to a list
  list.appendChild(item);
  //3. clear input
  input.value = '';
  //4. when clicked delete item
  item.addEventListener('click', (e) => {
    list.removeChild(item);
  });
});
