const elCards = document.querySelector(".cards");

function renderPosts(array, parent){
    parent.textContent = null;

    data.forEach(function(value, i){
        const element = array[i];
        const newCard = document.createElement("div");
        newCard.className = 'card';
        newCard.style.width = '18rem';
        newCard.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${element.email}</h6>
            <p class="card-text">${element.body}</p>
            <a href="#" id="delete" class="card-link btn btn-danger">Delete</a>
            <a href="#" id="edit" class="card-link btn btn-info text-light">Edit</a>
        </div>
        `
        parent.appendChild(newCard);
    })
}

elCards.addEventListener("click", function(evt){
    if (evt.target.id === 'delete'){
        console.log('delll')
    }
})

renderPosts(data, elCards)






// function renderPosts(array, parent){
//     parent.textContent = null;
//     for (let i = 0; i < array.length; i++){
//         const element = array[i];
//         const newCard = document.createElement("div");
//         newCard.className = 'card';
//         newCard.style.width = '18rem';
//         newCard.innerHTML = `
//         <div class="card-body">
//             <h5 class="card-title">${element.name}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">${element.email}</h6>
//             <p class="card-text">${element.body}</p>
//             <a href="#" class="card-link btn btn-danger">Delete</a>
//             <a href="#" class="card-link btn btn-info text-light">Edit</a>
//         </div>
//         `
//         parent.appendChild(newCard);
//     }
// }

// renderPosts(data, elCards)