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
		// add task
	});
	leftCol.appendChild(addProjectButton);

	const rightCol = document.createElement('div');
	rightCol.classList.add('scrollable');
	main.appendChild(rightCol);

	const todoHeading = document.createElement('h1');
	todoHeading.textContent = 'Tasks';
	rightCol.appendChild(todoHeading);

	const table = document.createElement('table');
	table.id = 'taskTable';
	rightCol.appendChild(table);

	const addToDoButton = document.createElement('button');
	addToDoButton.textContent = 'Add Task';
	addToDoButton.addEventListener('click', () => {
		// add task
		console.log('Event');
		addTask();
	});
	rightCol.appendChild(addToDoButton);

	return main;
}

function addTask() {
	console.log('Function');

	const taskTable = document.getElementById('taskTable');

	const row = document.createElement('tr');
	const form = document.createElement('form');
	const inputName = document.createElement('input');
	const inputDate = document.createElement('input');

	const submitBtn = document.createElement('button');
	submitBtn.textContent = 'Submit';
	const cancelBtn = document.createElement('button');
	cancelBtn.textContent = 'Cancel';

	form.appendChild(inputName);
	form.appendChild(inputDate);
	form.appendChild(submitBtn);
	form.appendChild(cancelBtn);

	row.appendChild(form);
	taskTable.appendChild(row);

	console.log('Function2');
}

function addProject() {
	const modal = document.createElement('div');
}

document.body.appendChild(component());
