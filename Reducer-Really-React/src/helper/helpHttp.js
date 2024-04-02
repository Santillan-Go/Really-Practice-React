export const helpHttp=()=>{

 const customFetch=(endpoint,option)=>{ 
const defaultHeaders={
    accept:`application/json`
}



const controller= new AbortController()
option.signat=controller.signal;


option.method=option.method||"GET";
option.header=option.header?{...defaultHeaders,...option.header}:defaultHeaders;
 


option.body=JSON.stringify(option.body)||false;
if(!option.body)  delete option.body;

console.log(option);

setTimeout(()=>controller.abort(),3000)


return fetch(endpoint, option)
.then(res=>res.ok? res.json(): Promise.reject({

    err:true,
    status:res.status||"00",
    statusText:res.statusText||"Ocurrió un error",
})
)
.catch(err=>err)

}

 const get=(url, option={})=>customFetch(url,option)
 const post=(url, option={})=>{

    option.method="POST"

    return  customFetch(url, option)
  }
 const put=(url, option={})=>{

    option.method="PUT"

    return  customFetch(url, option)
  }
 const del=(url, option={})=>{


    option.method="DELETE"

    return  customFetch(url, option)

  }



return  {

    get,
    post,
    put,
    del
}
}