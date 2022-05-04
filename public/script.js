let date = new Date();

let fDate
if (date.getMonth() <= 9) {
    fDate = `${date.getFullYear()}-0${date.getMonth()+01}-${date.getDate()}`; 
}



function displayQuote(data) {
    let number = Math.floor(Math.random() * 1000);
    document.querySelector("#quote").innerHTML = `"${data[number].text}" -${data[number].author}`;

}

function displayDate(date) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    document.querySelector('#date').innerHTML = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

fetch('https://type.fit/api/quotes').then(function(response) {
    return response.json();
}).then(displayQuote);

displayDate(date);

// const info = document.querySelector('#data').value;

// for(let i = 0; i < info.length; i++) {
//     console.log(info[i].task_name)
// };


function add_subtask() {
    const add_subtask = '<input type="text" name="sub_task">';
    document.querySelector('.sub_task').innerHTML += add_subtask;
}

// function set_id() {
//     // localStorage.setItem("task_id", document.querySelector('.task_id').innerHTML);   
//     document.querySelector('#wrapper_task').innerHTML += `<%for(let i = 0; i < tasks.length; i++) {%> <% if (tasks[i]._id == "626dd74227245f18d00ca76a") {%><div id="display_task"><div id="title"> <%=tasks[i].task_name%> </div> <% for(let j = 0; j<tasks[i].sub_task.length;j++) {%> <div class="display_subtask"> <%= tasks[i].sub_task[j]%> </div> <%} %> <%} %> <%} %> </div>`
    
// }

function getId(id) {
    let task_id = document.get(id).innerHTML
    console.log(task_id);
}
