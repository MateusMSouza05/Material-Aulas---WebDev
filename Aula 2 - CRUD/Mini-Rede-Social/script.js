// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function() {
    mostrarPost();
    document.querySelector("#postForm").addEventListener("submit", addPost)
}

//create
    function addPost(infosDoEvento) {
        infosDoEvento.preventDefault();

        const textPost = document.querySelector("#postText").value;
        const postCategory = document.querySelector("#postCategory").value;
        const postImage = document.querySelector("#postImage").value

        const novoPost = {
            text: textPost,
            category: postCategory,
            image: postImage,
            date: new Date().toLocaleString()
        }

        posts.unshift(novoPost);
        mostrarPost()

    }
//read
    function mostrarPost() {
       const listPosts = document.querySelector("#postList");
       listPosts.innerHTML = "";
       posts.forEach(pegaItem => {
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")
        cardPost.innerHTML = `
            <h2>${pegaItem.text}</h2>
            <img src="${pegaItem.image}"/>
            <p>Categoria: ${pegaItem.category}</p>
            <p>Data e hora: ${pegaItem.date}</p>
            <button>Editar</button> 
            <button>Deletar</button>
         `
         listPosts.append(cardPost)
       })
    }
//update
    function editarPost() {
        
    }
//delete
    function deletarPost() {
        
    }