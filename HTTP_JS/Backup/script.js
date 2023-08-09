//fetching data from an api and displaying it on the page

//XML HTTP Request
// function getData() {
//     var xhr = new XMLHttpRequest();

//     //configure the request (GET method, url to the data, async true or false)
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);

//     //set up a function to handle the response
//     xhr.onload = function () {
//         if(xhr.status >= 200 && xhr.status < 300) {
//             //Request was successfull
//             var responseData = JSON.parse(xhr.responseText);

//             //Update the data container with tthe retrieved data
//             var dataContainer = document.getElementById('data-container');
//             dataContainer.innerHTML = JSON.stringify(responseData, null, 2);

//             console.log(responseData);
//         } else {
//             //Request failed with an error
//             console.error('The request failed with an error: ' + xhr.status);
//         }
//     };

//     //setup a function to handle errors
//     xhr.onerror = function () {
//         console.error('Request Failed!!');
//     }

//     //send the request
//     xhr.send();
// }


function getData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) { //to check the status of the response
            if(response.ok) {
                return response.json();
            } else {    //this will be executed if the response is not ok
                throw new Error('Request failed!');
            }
        })
        .then(function (data) {
            var dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(function (error) {
            console.error(error);
        });
}


getData();