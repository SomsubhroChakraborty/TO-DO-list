const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const task = input.value;
  if (task.trim() === '') {
    return;
  }

  const item = document.createElement('li');
  item.innerHTML = `
    <span>${task}</span>
    <button class="delete-btn">X</button>
  `;
  list.appendChild(item);

  const deleteBtn = item.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    item.remove();
  });

  input.value = '';
});
