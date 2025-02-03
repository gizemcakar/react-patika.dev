
import axios from "axios";

async function getData (Number){
    let x = await getUserData(Number)
    x.posts = [];
    x.posts.push(await getPostData(Number))
}

async function getUserData (Number){
    const { data } = await axios("https://jsonplaceholder.typicode.com/users/"+Number)
    return data;
}

async function getPostData (Number){
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+Number)
    return data;
}

export default getData;

