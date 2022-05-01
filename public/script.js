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

displayDate()




const info = document.querySelector('#data').value;

// const inforJson = info.json();
for(let i = 0; i < info.length; i++) {
    console.log(info[i].task_name)
};


function add_subtask() {
    const add_subtask = '<input type="text" name="sub_task">';
    document.querySelector('.sub_task').innerHTML += add_subtask;
}