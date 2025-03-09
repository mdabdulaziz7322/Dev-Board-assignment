// document.getElementById('btn1').addEventListener('click', function(){
//     const text = getInnerTextById('intro1');
//     const activityLog = document.getElementById('activity-log');
//         const p = document.createElement("p");
//         p.classList.add('p-style');
//         p.innerText = `
//         You have Complete The Task ${text} at ${formattedTime} 
//         `
//         activityLog.appendChild(p);

//         document.getElementById('clear-btn').addEventListener('click', function(){
//             activityLog.removeChild(p);

        
//         })
        

       
// })

// document.getElementById('btn2').addEventListener('click', function(){
//     const text = getInnerTextById('intro2');
//     const activityLog = document.getElementById('activity-log');
//         const p = document.createElement("p");
//         p.classList.add('p-style');
//         p.innerText = `
//         You have Complete The Task ${text} at ${formattedTime} 
//         `
//         activityLog.appendChild(p);

//         document.getElementById('clear-btn').addEventListener('click', function(){
//             activityLog.removeChild(p);

        
//         })
        

       
// })
// document.getElementById('btn3').addEventListener('click', function(){
//     const text = getInnerTextById('intro3');
//     const activityLog = document.getElementById('activity-log');
//         const p = document.createElement("p");
//         p.classList.add('p-style');
//         p.innerText = `
//         You have Complete The Task ${text} at ${formattedTime} 
//         `
//         activityLog.appendChild(p);

//         document.getElementById('clear-btn').addEventListener('click', function(){
//             activityLog.removeChild(p);

        
//         })
        

       
// })

// document.getElementById('btn4').addEventListener('click', function(){
//     const text = getInnerTextById('intro4');
//     const activityLog = document.getElementById('activity-log');
//         const p = document.createElement("p");
//         p.classList.add('p-style');
//         p.innerText = `
//         You have Complete The Task ${text} at ${formattedTime} 
//         `
//         activityLog.appendChild(p);

//         document.getElementById('clear-btn').addEventListener('click', function(){
//             activityLog.removeChild(p);

        
//         })
        

       
// })
// document.getElementById('btn5').addEventListener('click', function(){
//     const text = getInnerTextById('intro5');
//     const activityLog = document.getElementById('activity-log');
//         const p = document.createElement("p");
//         p.classList.add('p-style');
//         p.innerText = `
//         You have Complete The Task ${text} at ${formattedTime} 
//         `
//         activityLog.appendChild(p);

//         document.getElementById('clear-btn').addEventListener('click', function(){
//             activityLog.removeChild(p);

        
//         })
        

       
// })

// document.getElementById('btn6').addEventListener('click', function(){
//     const text = getInnerTextById('intro6');
//     const activityLog = document.getElementById('activity-log');
//         const p = document.createElement("p");
//         p.classList.add('p-style');
//         p.innerText = `
//         You have Complete The Task ${text} at ${formattedTime} 
//         `
//         activityLog.appendChild(p);

//         document.getElementById('clear-btn').addEventListener('click', function(){
//             activityLog.removeChild(p);

        
//         })
        

       
// })


document.getElementById('card-container').addEventListener('click', function(event){
    if(event.target.tagName == 'BUTTON'){
        const button = event.target;
        const text = button.parentNode.parentNode.children[1].innerText;
        const activityLog = document.getElementById('activity-log');
        const p = document.createElement("p");
        p.classList.add('p-style');
        p.innerText = `
        You have Complete The Task ${text} at ${formattedTime} 
        `
        activityLog.appendChild(p);
        
        document.getElementById('clear-btn').addEventListener('click', function(){
            activityLog.removeChild(activityLog.lastChild);

        
        })
        
        
    }
})
    
