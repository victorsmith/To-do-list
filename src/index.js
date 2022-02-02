import './style.css';

function component() {
	const main = document.createElement('div');
	main.id = 'main';

	const leftCol = document.createElement('div');
	leftCol.classList.add('sidebar');
	main.appendChild(leftCol);

	const projectHeading = document.createElement('h1');
	projectHeading.textContent = 'Projects';
	leftCol.appendChild(projectHeading);
	
	const addProjectButton = document.createElement('button');
	addProjectButton.textContent = 'Add Project';
	addProjectButton.addEventListener('click', () => {
		addProjectButton.hidden = true;
		// add task
	});

	leftCol.appendChild(addProjectButton);

	const rightCol = document.createElement('div');
	rightCol.classList.add('scrollable');
	main.appendChild(rightCol);

	const todoHeading = document.createElement('h1');
	todoHeading.textContent = 'Tasks';
	rightCol.appendChild(todoHeading);

	const tasks = document.createElement('tasks');
	tasks.id = 'tasks';
	rightCol.appendChild(tasks);


	const addTaskButton = document.createElement('button');
	addTaskButton.id = 'addTask';
	addTaskButton.textContent = 'Add Task';
	addTaskButton.addEventListener('click', () => {
		addTaskButton.hidden = true;
		// add task
		console.log('Event');
		addTask();
	});

	rightCol.appendChild(addTaskButton);

	return main;
}

function addTask() {
	console.log('Function');

	const taskTable = document.getElementById('tasks');
	const addButton = document.getElementById('addTask');

	const taskContainer = document.createElement('div');
	taskContainer.classList.add('taskContainer');

	const form = document.createElement('form');
	const inputName = document.createElement('input');
	const inputDate = document.createElement('input');

	const submitBtn = document.createElement('button');
	submitBtn.textContent = 'Submit';
	submitBtn.addEventListener('click', () => {
		addButton.hidden = false;
		// submit form also
	})
	
	const cancelBtn = document.createElement('button');
	cancelBtn.textContent = 'Cancel';
	cancelBtn.addEventListener('click', () => {
		addButton.hidden = false;
	})

	form.appendChild(inputName);
	form.appendChild(inputDate);
	form.appendChild(submitBtn);
	form.appendChild(cancelBtn);

	taskContainer.appendChild(form);
	console.log('Function2');
	
	taskTable.appendChild(taskContainer);

}

function addProject() {
	const modal = document.createElement('div');
}

document.body.appendChild(component());
