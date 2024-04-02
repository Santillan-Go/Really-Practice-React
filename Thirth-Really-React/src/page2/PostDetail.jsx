import React from 'react'
import { json, useLoaderData, useParams } from 'react-router-dom'

export const PostDetail = () => {

    let { userId } = useParams();
  
const {post}=useLoaderData();
console.log(post)
console.log(userId)
  return (
    <div>


<h2>{post.title}</h2>

<p>{post.body}</p>
    </div>
  )
}


export const dataDetail=async ({params})=>{

   
const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
const post= await res.json();

console.log(res)
if(!res.ok) throw {statusText:res.status,status:res.status}

return {post}

}


