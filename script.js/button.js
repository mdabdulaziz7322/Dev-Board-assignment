const buttons = document.getElementsByClassName('complete-btn');
const remainingTask = document.getElementById('remaining-tasks').innerText;
let convertedTask = parseInt(remainingTask);
const taskFinished = document.getElementById('finished-tasks').innerText;
let convertedFinishTasks = parseInt(taskFinished);
let currentTime = new Date();
let formattedTime = currentTime.toLocaleTimeString();




for (const button of buttons) {
    button.addEventListener('click', function () {
        console
        alert('Board Updated Successfully');
        convertedTask = convertedTask - 1;
        document.getElementById('remaining-tasks').innerText = convertedTask;
        convertedFinishTasks = convertedFinishTasks + 1;
        document.getElementById('finished-tasks').innerText = convertedFinishTasks;
        this.disabled = true;
        this.style.opacity = "0.5";
        if (convertedTask == 0) {
            alert('congrats!!! You have completed all the current task');
        }
        
        





    })

}