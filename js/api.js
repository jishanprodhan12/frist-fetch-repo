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

const loadComment = async() => {
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await comments.json();
    console.log(data);
}

// fetch and try catch 
const loadPhotos = async()=>{
    try{
        const photos = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await photos.json();
        console.log(data)
    }catch(error){
        console.error("error inside try catch and error is " , error);
    }
}