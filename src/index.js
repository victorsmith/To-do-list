import './style.css';
import Task from './Task.js';
import Project from './Project';

let projects = [];
let currentProjectIndex = 0;

const newProject = new Project(
	'Example Project',
	'A Project Showcasing the layout of todo.io'
);

const exampleTask0 = new Task(
	'Laundry',
	'Clean up your nasty clothes.',
	new Date('2015-03-01'),
	'High'
);
const exampleTask1 = new Task(
	'Gym',
	"Lift some heavy stuff every now and then so you don't die at 28",
	new Date('2015-03-25'),
	'High'
);
const exampleTask2 = new Task(
	'Finish the Odin Project',
	'Finish the wonderful Odin Project before April 2022',
	new Date('2022-04-30'),
	'High'
);
const exampleTask3 = new Task(
	'Finish One Piece',
	'Finish the anime One Piece before the end of 2022',
	new Date('2023-01-01'),
	'Medium'
);

newProject.addTask(exampleTask0);
newProject.addTask(exampleTask1);
newProject.addTask(exampleTask2);
newProject.addTask(exampleTask3);

projects.push(newProject);

// const test = initUI()
// console.log(typeof test);
document.body.appendChild(initUI());

// Global UI Components
const projectTable = document.getElementById('projects');
const taskTable = document.getElementById('tasks');
const addProjectButton = document.getElementById('addTask');
const addTaskButton = document.getElementById('addTask');

const modal = createModal();
document.body.appendChild(modal);

updateUI();

function initUI() {
	const main = document.createElement('div');
	main.id = 'main';

	// LEFT COL UI => Projects Section
	const leftCol = document.createElement('div');
	leftCol.classList.add('sidebar');
	main.appendChild(leftCol);

	const projectHeading = document.createElement('h1');
	projectHeading.textContent = 'Projects';
	leftCol.appendChild(projectHeading);

	const projects = document.createElement('projects');
	projects.id = 'projects';
	leftCol.appendChild(projects);

	const addProjectButton = document.createElement('button');
	addProjectButton.classList.add('major');
	addProjectButton.textContent = 'Add Project';
	addProjectButton.addEventListener('click', () => {
		modal.style.display = 'block';
	});

	leftCol.appendChild(addProjectButton);

	// RIGHT COL UI => Tasks Section
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
	addTaskButton.classList.add('major');
	addTaskButton.id = 'addTask';
	addTaskButton.textContent = 'Add Task';
	addTaskButton.addEventListener('click', () => {
		addTaskButton.hidden = true;
		taskTable.appendChild(createTaskContainerForm());
		// add task
		console.log('Event');
		// addTask();
	});

	rightCol.appendChild(addTaskButton);
	return main;
}

function updateUI() {
	// reset table
	projectTable.innerHTML = '';
	taskTable.innerHTML = '';

	// 1) create container for each project
	// 2) populate container with project attribute values
	// 3) publish to projectTable
	projects.forEach((project, i) => {
		const projectContainer = createProjectContainer(project);
		projectTable.appendChild(projectContainer);

		// console.log(i);
		if (i == currentProjectIndex) {
			projectContainer.classList.remove('projectContainer');
			projectContainer.classList.add('selected');
		}
	});

	// 1) create container for each task
	// 2) populate container with task attribute values
	// 3) publish to taskTable
	projects[currentProjectIndex].tasks.forEach((task) => {
		taskTable.appendChild(createTaskContainer(task));
	});
}

// Create project container
function createProjectContainer(project) {
	const projectContainer = document.createElement('div');
	projectContainer.classList.add('projectContainer');
	projectContainer.addEventListener('click', (e) => {
		for (let x = 0; x < projects.length; x++) {
			if (projects[x].name == projectContainer.textContent) {
				currentProjectIndex = x;
				updateUI();
				return;
			}
		}
	});

	const projectName = document.createElement('h3');
	projectName.textContent = project.name;

	projectContainer.appendChild(projectName);
	console.log(projectContainer);

	return projectContainer;
}

// const task = new Task()

function createTaskContainer(taskObject) {
	const taskContainer = document.createElement('div');
	taskContainer.classList.add('taskContainer');

	const taskTitle = document.createElement('div');
	taskTitle.textContent = taskObject.title;

	const taskDate = document.createElement('div');
	taskDate.textContent = taskObject.dueDate;

	const taskDone = document.createElement('input');
	taskDone.type = 'checkbox';

	taskContainer.appendChild(taskTitle);
	taskContainer.appendChild(taskDate);
	taskContainer.appendChild(taskDone);

	return taskContainer;
}

function createTaskContainerForm(task) {
	const taskContainer = document.createElement('div');
	taskContainer.classList.add('taskContainer');

	// const form = document.createElement('form');
	// Task form
	const inputName = document.createElement('input');
	inputName.placeholder = 'Enter project name here';
	inputName.type = 'text';

	const inputDate = document.createElement('input');
	inputDate.type = 'date';

	const submitBtn = document.createElement('button');
	submitBtn.classList.add('minor');

	submitBtn.textContent = 'Submit';
	submitBtn.addEventListener('click', () => {
		// taskContainer.innerHTML = '';
		const newTask = new Task(
			inputName.value,
			inputName.value,
			inputDate.value
		);
		projects[currentProjectIndex].tasks.push(newTask);
		addTaskButton.hidden = false;

		updateUI();
		// return;
	});

	const cancelBtn = document.createElement('button');
	cancelBtn.classList.add('minor');
	cancelBtn.textContent = 'Cancel';
	cancelBtn.addEventListener('click', () => {
		addTaskButton.hidden = false;
		updateUI();
	});

	taskContainer.appendChild(inputName);
	taskContainer.appendChild(inputDate);
	taskContainer.appendChild(submitBtn);
	taskContainer.appendChild(cancelBtn);
	return taskContainer;
}

// Creates modal which collects data for the creation of a new project
function createModal() {
	const modal = document.createElement('div');
	modal.classList.add('modal-background');

	const modalBody = document.createElement('div');
	modalBody.classList.add('modal-content');

	const closeButton = document.createElement('span');
	closeButton.textContent = 'x';
	closeButton.classList.add('close');
	closeButton.addEventListener('click', () => {
		modal.style.display = 'none';
		projectNameInput.value = '';
		projectDescriptionInput.value = '';
	});
	modalBody.appendChild(closeButton);

	const modalHeader = document.createElement('h1');
	modalHeader.textContent = 'Create a Project';
	modalBody.appendChild(modalHeader);

	// // Form for project creation modal
	// const form = document.createElement('form');

	const projectNameInput = document.createElement('input');
	projectNameInput.id = 'projectNameField';
	projectNameInput.type = 'text';
	projectNameInput.placeholder = 'Project Name';
	modalBody.appendChild(projectNameInput);

	const projectDescriptionInput = document.createElement('input');
	projectDescriptionInput.id = 'projectDescription';
	projectDescriptionInput.type = 'text';
	projectDescriptionInput.placeholder = 'Project Description';
	modalBody.appendChild(projectDescriptionInput);

	const submitBtn = document.createElement('button');
	submitBtn.classList.add('minor');

	submitBtn.textContent = 'Create';
	submitBtn.addEventListener('click', () => {
		const newProject = new Project(
			projectNameInput.value,
			projectDescriptionInput.value
		);
		projects.push(newProject);
		updateUI();
		modal.style.display = 'none';
	});
	modalBody.appendChild(submitBtn);

	const cancelBtn = document.createElement('button');
	cancelBtn.classList.add('minor');
	cancelBtn.textContent = 'Cancel';

	modalBody.appendChild(cancelBtn);
	modal.appendChild(modalBody);

	return modal;
}

function switchProject() {}
