$(document).ready(loadScript)

function loadScript() {
    // Get
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            let display = ""
            for (let i = 0; i < json.length; i++){
                display += `    <div class="card m-2" style="width: 18rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">User Id : ${json[i].userId}</li>
            <li class="list-group-item">Id : ${json[i].id}</li>
            <li class="list-group-item">Title : ${json[i].title}</li>
            <li class="list-group-item">Body : ${json[i].body}</li>
        </ul>
    </div>`
            }
            document.getElementById('content-area').innerHTML = display
        })
        .catch(err => console.log(err));


    // Post
    $("#btn-click").click(function () {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {alert("saved..!")})
    })
}
