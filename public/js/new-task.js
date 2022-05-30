import { update_task } from "../../modules/update-task.js";
import { delete_task } from "../../modules/delete-task.js";

document.querySelector("#task").addEventListener("keyup", function (e) {
	if (e.code == "Enter") {
		const taskText = document.querySelector("#task").value;
		if (taskText) {
			addNewTask(taskText);
			document.querySelector("#task").value = "";
		}
	}
});

function addNewTask(task) {
	let tasks;

	new Promise((resolve) => {

		if (localStorage.hasOwnProperty("to_do_tasks")) {
			const tasks = JSON.parse(localStorage.getItem("to_do_tasks"));
			tasks.push({ name: task, status: "to_do" });
			resolve(tasks)
		} else {
			tasks = [
				{
					name: task,
					status: "to do",
				},
			];
			resolve(tasks)
		}
	}).then((tasks) => {

		localStorage.setItem("to_do_tasks", JSON.stringify(tasks));
	
		const tasks_list = document.getElementById("tasks-list");
		const newTask = document.createElement("li");
		newTask.textContent = task;
	
		const buttons = document.createElement("div");
		buttons.classList.add("buttons");
	
		const completeBtn = document.createElement("button");
		completeBtn.classList.add("complete");
		completeBtn.addEventListener('click', function(){
			update_task(completeBtn.closest('li'))
		})
	
		const deleteBtn = document.createElement("button");
		deleteBtn.classList.add("remove");
		deleteBtn.addEventListener('click', function(){
			delete_task(completeBtn.closest('li'))
		})
	
		buttons.append(deleteBtn, completeBtn);
		newTask.append(buttons);
	
		console.log(newTask);
	
		tasks_list.prepend(newTask);

	})


}
