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
        // const text = document.getElementsByClassName('text').innerText;
        const text =  document.getElementById('text-6').innerText;
        console.log(text);
        const activityLog = document.getElementById('activity-log');
        const p = document.createElement("p");
        p.classList.add('p-style');
        p.innerText = `
        You have Complete The Task ${text} at ${formattedTime}
        `
        console.log(p);

        activityLog.appendChild(p);

        document.getElementById('clear-btn').addEventListener('click', function(){
            activityLog.removeChild(p);
        })
        





    })

}