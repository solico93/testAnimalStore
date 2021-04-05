// function showUsers() {

//     // Creating the ajax object: 
//     const ajax = new XMLHttpRequest();

//     // Function which will be invoked several times during the operation:
//     ajax.onreadystatechange = () => {

//         // If we've got back a response from the server: 
//         if(ajax.readyState === 4) {

//             // On success:
//             if(ajax.status === 200) {
                
//                 // Convert the JSON string into a pure data array:
//                 const users = JSON.parse(ajax.responseText);
                
//                 // Present the data:
//                 const ulUsers = document.getElementById("ulUsers");
//                 let content = "";
//                 for(const user of users) {
//                     const li = `<li>${user.name}</li>`;
//                     content += li;
//                 }
//                 ulUsers.innerHTML = content;

//             }
//             else { // On failure:
//                 alert("Some error! Status: " + ajax.status);
//             }
//         }
//     };

//     // Configuration: 
//     ajax.open("GET", "https://jsonplaceholder.typicode.com/users");

//     // Do the request:
//     ajax.send();
// }

// function showTODOs() {
//     const ajax = new XMLHttpRequest();
//     ajax.onreadystatechange = () => {
//         if(ajax.readyState === 4) {
//             if(ajax.status === 200) {
//                 const todos = JSON.parse(ajax.responseText);
//                 const olTODOs = document.getElementById("olTODOs");
//                 let content = "";
//                 for(const todo of todos) {
//                     const li = `<li>${todo.title} - ${todo.completed ? "completed" : "not completed"}</li>`;
//                     content += li;
//                 }
//                 olTODOs.innerHTML = content;
//             }
//             else {
//                 alert("Some error! Status: " + ajax.status);
//             }
//         }
//     };
//     ajax.open("GET", "https://jsonplaceholder.typicode.com/todos");
//     ajax.send();
// }

alert("welcom");