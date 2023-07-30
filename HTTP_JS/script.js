// function getData() {
//     var xhr = new XMLHttpRequest();

//     //configure the request (GET method, URL to the data)
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

//     //set up a function to handle the response
//     xhr.onload = function () {
//         if(xhr.status >= 200 && xhr.status < 300) {
//             //Request was successful
//             var responseData = JSON.parse(xhr.responseText);

//             //Update the data container with the retrieved data
//             var dataContainer = document.getElementById('data-container');
//             dataContainer.innerHTML = JSON.stringify(responseData, null, 2);
//         } else {
//             //Request failed with an error
//             console.error('Request failed with error: ' + xhr.status);
//         }
//     };

//     // set up a function to handle errors
//     xhr.onerror = function () {
//         console.error("Request Failed!!");
//     };

//     //send the request
//     xhr.send();
// }

function getData() {    //fetch() returns a promise
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => { //this is to check if the response is ok
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            //Update the data container with the retrieved data
            var dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation: ', error);
        });
}

getData();

//JSON.stringify() converts a JavaScript object or value to a JSON string

/*
syntax:
JSON.stringify(value, replacer, space)
*/