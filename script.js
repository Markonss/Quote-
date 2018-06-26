var list = document.querySelector('#task-list ul');
var forms = document.forms;

// delete tasks
list.addEventListener('click', function(task) {
    if (task.target.className == 'delete') {
        var li = task.target.parentElement;
        li.parentNode.removeChild(li);
    }
});

// add tasks
var addForm = forms['add-task'];
addForm.addEventListener('submit', function(stop) {
    stop.preventDefault();

    // create elements
    var value = addForm.querySelector('input[type="text"]').value;
    var li = document.createElement('li');
    var taskName = document.createElement('span');
    var deleteBtn = document.createElement('span');

    // add text
    taskName.textContent = value;
    deleteBtn.textContent = 'delete';

    // add classes to elements
    taskName.classList.add('name');
    deleteBtn.classList.add('delete');

    // appending the text to the DOM
    li.appendChild(taskName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});


// search for tasks 
var searchBar = forms['search-tasks'].querySelector('input');
searchBar.addEventListener('keyup', function(text) {
    var term = text.target.value.toLowerCase();
    var tasks = list.getElementsByTagName('li');
   // changing all text to lower case
    Array.from(tasks).forEach(function(task) {
        var title = task.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(text.target.value) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
});

// tabbed content

