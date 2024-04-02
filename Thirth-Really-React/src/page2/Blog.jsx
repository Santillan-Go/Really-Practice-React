import { Link, useLoaderData } from "react-router-dom";



export   const Blog=()=>{
const post=useLoaderData()
console.log(post)
    return(
        <>
        <ul>

              {
post.length>0&&

        post[0].map(p=> <Link  to={`${p.id}`} key={`${p.id}`}>{p.title}</Link> )
    }
        </ul>
  
        
        </>
    )
}




export const loader=async()=>{


    const res=await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const  json=  await res.json();
return[json]

}