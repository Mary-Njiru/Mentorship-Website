 function addAchievement() {
  const achievementInput = document.getElementById('achievementInput');
  const achievementList = document.getElementById('achievementList');
  // Check if the input is not empty
  if (achievementInput.value.trim() !== '') {
  // Create a new list item
  const listItem = document.createElement('li');
  // Create a span for the task text
  const achievementText = document.createElement('span');
  achievementText.textContent = achievementInput.value;
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
  listItem.appendChild(achievementText);
  listItem.appendChild(completeButton);
  listItem.appendChild(removeButton);
  // Append the list item to the task list
  achievementList.appendChild(listItem);
  // Clear the input field
  achievementInput.value = '';
  }
 }

