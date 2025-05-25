const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');
const jobCount = document.querySelector('#job-count');

// Function to update the job count
function updateJobCount() {
  const count = list.children.length;
  jobCount.textContent = `Jobs: ${count}`;
}

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const task = input.value.trim();
  if (task === '') return;

  // Create list item
  const item = document.createElement('li');
  item.innerHTML = `
    <span class="task-text">${task}</span>
    <button class="delete-btn">X</button>
  `;

  // Append to list
  list.appendChild(item);

  // Add delete functionality
  const deleteBtn = item.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    item.remove();
    updateJobCount();
  });

  // Clear input and update count
  input.value = '';
  updateJobCount();
});
