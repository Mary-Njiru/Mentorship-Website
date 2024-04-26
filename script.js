
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    // Check if the input is not empty
    if (taskInput.value.trim() !== '') {
    // Create a new list item
    const listItem = document.createElement('li');
    // Create a span for the task text
    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
    // Create buttons for marking as complete and removing the task
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = function () {
    listItem.classList.toggle('completed');
    };
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function () {
    listItem.remove();
    };
    // Append elements to the list item
    listItem.appendChild(taskText);
    listItem.appendChild(completeButton);
    listItem.appendChild(removeButton);
    // Append the list item to the task list
    taskList.appendChild(listItem);
    // Clear the input field
    taskInput.value = '';
    }
   }