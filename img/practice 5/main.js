
const requestUrl = 'https://reqres.in/api/users?page=2';
const postWrapper = document.getElementById('post-wrapper');
let posts = [];

const createTemplate = data => {
    return template = `
       <div class="wrapper-post">
            <div class="id">ID: ${data.id}</div>
            <div class="email">EMAIL: ${data.email}</div>
            <div class="avatar">AVATAR: ${data.avatar}</div>
            <div class="first_name">FIRST NAME: ${data.first_name}</div>
            <div class="last_name">LAST NAME: ${data.last_name}</div>
            <img src="${data.avatar}" alt="">
       </div>
    `
}


const getPosts = url => {
    fetch(url)
    .then(response => response.json())
    .then(json => {
        posts = json;
        posts.data.forEach(item => {
            postWrapper.innerHTML += createTemplate(item);
        })
    })
}

getPosts(requestUrl);