import React,{useState,useEffect} from 'react'


const initialForm={
    song:"",
    artist:"",
}


export const SongForm = ({handleSearch}) => {

const [form, setForm] = useState(initialForm)


const  handleOnChange=(e)=>{

setForm(
    {...form,[e.target.name]:e.target.value}
    
    );


}


const handleSubmit=(e)=>{
e.preventDefault();

if(!form.artist||!form.song){
return alert("Llena los campos")
}
handleSearch(form);
setForm(initialForm);
}

  return (
    <div>
      <form   onSubmit={handleSubmit} >
        <input type="text" name="artist" value={form.artist}  onChange={handleOnChange}  placeholder='Artist' />
        <input type="text" name="song" value={form.song} onChange={handleOnChange}   placeholder='Song' />
        <input type="submit" />
      </form>
    </div>
  );
}
