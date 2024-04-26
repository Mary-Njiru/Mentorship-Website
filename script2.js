// retrieving stored tasks
window.onload = function(){
    retrieveData();
    }
    document.getElementById("btn").addEventListener("click", addGoal);
    // adding new task
    function addGoal(){
    var goalVal = document.getElementById("goal").value;
    document.getElementById("goal").value = "";
    var random = Math.random();
    var newCard = createCard(random, "progress", goalVal);
    storeData(random, newCard);
    }
    // creating card
    function createCard(cardId, sectionId, goalValue){
    var card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", cardId);
    card.setAttribute("draggable", "true");
    card.setAttribute("data-current", sectionId);
    card.addEventListener("dragover", stopProp);
    card.addEventListener("dragstart", drag);
    var goal = document.createElement("p");
    goal.append(goalValue);
    var closeIcon = document.createElement("i");
    closeIcon.classList.add("far", "fa-times-circle");
    closeIcon.setAttribute("id", "closeIcon");
    card.append(goal);
    card.append(closeIcon);
    document.getElementById(sectionId).append(card);
    return card;
    }
    // deleting tasks
    function deleteGoal(ev){
    if(ev.target.getAttribute("id")=="closeIcon"){
    var confirmDelete = confirm("Once the goal is deleted it can't be retrieved. Are you sure you want to delete it?");
    if(confirmDelete){
    var deletedGoalId = ev.target.parentElement.getAttribute("id");
    // ramove task from screen
    document.getElementById(deletedGoalId).style.display = "none";
    localStorage.removeItem(deletedGoalId);
    }
    }
    }
    // stop cards propagation
    function stopProp(event){
    event.stopPropagation();
    }
    // on drag start of cards
    function drag(event){
    event.dataTransfer.setData("text", event.target.id);
    }
    // allowing drop event on sections
    function allowDrop(ev){
    ev.preventDefault();
    }
    // dropping cards in sections
    function drop(ev){
    var cardId = ev.dataTransfer.getData("text");
    var cardDropped = document.getElementById(cardId);
    var section = ev.target;
    var secId = section.getAttribute('id');
    section.appendChild(cardDropped);
    cardDropped.setAttribute("data-current", secId);
    storeData(cardId, cardDropped);
    }
    // storing tasks in local storage
    function storeData(cardId, card){
    localStorage.setItem(cardId, JSON.stringify([
    card.getAttribute("data-current"),
    card.innerText
    ]));
    }
    // retrieving data from local storage
    function retrieveData(){
    for(var i=0; i<localStorage.length; i++){
    var storedCardId = localStorage.key(i);
    var cardRetrieved = JSON.parse(localStorage.getItem(storedCardId));
    var sectionId = cardRetrieved[0];
    createCard(storedCardId, sectionId, cardRetrieved[1]);
    }
    }