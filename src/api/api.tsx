import axios from "axios";

const getTodos = async (pageNumber:number)=>{
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${pageNumber}&_limit=3`);
        return response.status === 200 ? response.data : [];
    }
    catch(err)
    {
        console.log(err);
    }
};

const fetchPostbyId= async (id:number)=>{
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.status === 200 ? response.data : [];
    }
    catch(err)
        {
            console.log(err);
        }
};

export {getTodos,fetchPostbyId};