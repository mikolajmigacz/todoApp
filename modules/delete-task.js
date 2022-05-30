export const delete_task = (item) => {

    const tasks = JSON.parse(localStorage.getItem('to_do_tasks'))

    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i].name === item.innerText)
        tasks.splice(i,1)
    }

    localStorage.setItem('to_do_tasks',JSON.stringify(tasks))

    item.remove()
}