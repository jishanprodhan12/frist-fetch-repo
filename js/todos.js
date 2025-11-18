
    function loadTodos(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=> res.json())
        .then(data=> console.log(data))
        .catch(err=> console.error(err))
    }
  const loadPost2 = async()=>{
    try{
        const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
        const  data = await getPosts.json();
        console.log(data)
    }catch(error){
        console.error(error);
    }
  }