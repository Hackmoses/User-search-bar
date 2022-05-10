const url = "https://jsonplaceholder.typicode.com/users";

//fetch api function

function fetchUsers(){
    fetch(url).then(res => res.json()).then(data =>{
        renderUsers(data); 
    })
    
}


//Render function

function renderUsers(usersData){
    const ul = document.getElementById("user-list-container");

    usersData.forEach((user, index)=> {
        const li = document.createElement("li");

        li.innerHTML =`
        <span>${index + 1}.</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
        `;

        ul.appendChild(li);
    });


}

//Add Search function

function searchByUsername(){
    const input = document.getElementById("search");
    const ul = document.getElementById("user-list-container");
    const inputValue = input.value.toUpperCase();
  
    const usersList = ul.querySelectorAll("li");


    for (let  i= 0; i < usersList.length; i++) {
        const usernameSpanTag = usersList[i].querySelector(".username");
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();

        const isMatch = usernameSpanTagValue.indexOf(inputValue) > - 1;
        if (isMatch) {
            usersList[i].style.display = "block";
        } else{
            usersList[i].style.display = "none";
        }
        
    }


}


fetchUsers();
searchByUsername();