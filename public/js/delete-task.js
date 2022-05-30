import { delete_task } from "../../modules/delete-task.js"
const completeBtns = document.getElementsByClassName('remove')

for (let i = 0; i < completeBtns.length; i++) {
    completeBtns[i].addEventListener('click', () => {
        delete_task(completeBtns[i].closest('li'))
    })
    
}