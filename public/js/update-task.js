import { update_task } from "../../modules/update-task.js"
const completeBtns = document.getElementsByClassName('complete')

for (let i = 0; i < completeBtns.length; i++) {
    completeBtns[i].addEventListener('click',function() {
        update_task(completeBtns[i].closest('li'))
    })
    
}