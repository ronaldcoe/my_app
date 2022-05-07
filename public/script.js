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


function add_subtask() {
    const add_subtask = '<input type="text" name="sub_task">';
    document.querySelector('.sub_task').innerHTML += add_subtask;
}


function getId(id) {
    let task_id = document.get(id).innerHTML
    console.log(task_id);
}

const update = document.querySelector('#mark_completed')
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);
update.addEventListener('click', _ => {
    fetch('/tasks', {
        method: 'put',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
           
            complete: 1
        })
    }).then(res => {
        if (res.ok) return res.json();
    }).then(response => {
        window.location ='/'
    })
});

const updateIncomplete = document.querySelector('#mark_incomplete')

updateIncomplete.addEventListener('click', _ => {
    fetch('/tasks', {
        method: 'put',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            complete: 0
        })
    }).then(res => {
        if (res.ok) return res.json();
    }).then(response => {
        window.location ='/'
    })
});