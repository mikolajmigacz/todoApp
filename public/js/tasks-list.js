if (localStorage.hasOwnProperty("to_do_tasks")) {

    const tasks = JSON.parse(localStorage.getItem('to_do_tasks'))
	tasks.map(task => {
		const tasks_list = document.getElementById("tasks-list");
		const newTask = document.createElement("li");
		newTask.textContent = task.name;

		if (task.status === "ready") newTask.classList.add("ready");

		const buttons = document.createElement("div");
		buttons.classList.add("buttons");

		const completeBtn = document.createElement("button");
		completeBtn.classList.add("complete");

		const deleteBtn = document.createElement("button");
		deleteBtn.classList.add("remove");

		buttons.append(deleteBtn, completeBtn);
		newTask.append(buttons);

		tasks_list.prepend(newTask);
	});
}
