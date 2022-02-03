export default class Project {
	
	constructor(name, description) {
		this.name = name;
		this.description = description;
		this.tasks = [];
	}

	addTask (task) {
		this.tasks.push(task)
	}

}
