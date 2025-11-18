// fetch normal function 
function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error('Error Happend ', err));
}

// fetch with arrow function 
const loadPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error("ERROR Happend", err))
}
// fetch using async and await

const loadComment = async () => {
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await comments.json();
    handleComment(data);
}

// fetch and try catch 
const loadPhotos = async () => {
    try {
        const photos = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await photos.json();
        handlePhotos(data);
    } catch (error) {
        console.error("error inside try catch and error is ", error);
    }
}
function handlePhotos(datas) {
    const container = document.getElementById('all-container');
    for (const data of datas) {
        const title = data.title ;
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img   src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                ${title}
                <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
            </div>
        </div>
    </div>
    `
        container.appendChild(div);
   
    }
}
function handleComment(data){
    const container = document.getElementById('all-container');
    for(const d of data){
        const p = document.createElement('p');
        const comment = document.createElement('p');
        const {postId , body }=   d ;
        p.innerText = `post id : ${postId}`
        comment.innerText = `comment : ${body}`
        container.appendChild(p);
        container.appendChild(comment);
        console.log(d)
    }
}