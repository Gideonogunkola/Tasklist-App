// Define Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// //  load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners() {
  //DOM Load Event
    document.addEventListener("DOMContentLoaded", getTasks)
  //  add  task event
    form.addEventListener("submit", addTask);
  // remove task event
    taskList.addEventListener("click", removeTask);
  //clear all tasks event
    clearBtn.addEventListener("click", clearTasks);
  // filter tasks event
    filter.addEventListener("keyup", filterTasks);
}

//get task from local storage
function getTasks() {
  let tasks; 
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
   

  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    if (taskInput.value = ""){
      taskList
    }
    else{
      taskList.appendChild(li)
    }
    
  });
}

// Add Task function
function addTask (e) {
  if(taskInput.value === '') {
    alert("Input a Task")
  }


// Create Element
const li = document.createElement('li')
// Add class
li.className = 'collection-item'
// create text note and append
li.appendChild(document.createTextNode(taskInput.value));


// Create New Link
const link = document.createElement('a');
// Add class
link.className = 'delete-item secondary-content';
//Add icon
link.innerHTML = '<i class ="fa fa-remove"></i>';
//append link to li
li.appendChild(link);

//append li to Ul
if (taskInput.value === ''){
  taskList
}
else{
taskList.appendChild(li)

}

// store in local storage
let store = taskInput.value != 
storeTaskInLocalStorage(taskInput.value);

// clear input
taskInput.value='';

  e.preventDefault();
}



// //store task
// Store Task
function storeTaskInLocalStorage(task) {
  //let tasks = localStorage.getItem("tasks", []);
 let tasks; 
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
   
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//remove Task Function
// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();

      // Remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks; 
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//clear Task Fuction
function clearTasks () {
  // taskList.innerHTML="";

  //faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  // Clear from LS
  clearTasksFromLocalStorage();
}
// Clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}


// filter task function
function filterTasks (e) {
  const text = e.target.value.toLowerCase();
  let newItem = document.querySelectorAll('.collection-item');
  
  newItem.forEach(
    function (task){
      const item  = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      }
    else{
      
      task.style.display = 'none'
    }
  }
  )
}
