import React,{useState,useEffect} from 'react'
import { SongForm } from './SongForm';
import { SongDetail } from './SongDetail';
import {Loader}  from "./Loader"
import { helpHttp } from '../helper/helpHttp';
export const SearchMusic = () => {


    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    
    const [bio, setBio] = useState(null);
    
    const [loader, setLoader] = useState(false);


useEffect(()=>{
    if(search===null)  return;

const fetchData=async ()=>{
let {artist, song}=search;


let  songAPI=`https://api.lyrics.ovh/v1/${artist}/${song}`; 
let  artistAPI=`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`; 

setLoader(true);


const [artistRes, songRes] =await Promise.all([
  helpHttp().get(artistAPI),
  helpHttp().get(songAPI,),
]);

// console.log(artistRes,songRes)

setBio(artistRes)
setLyric(songRes)
setLoader(false)

}


fetchData();

},[search])


const handleSearch=(data)=>{
//console.log(data)
setSearch(data);


}

  return (
    <div  >



        <h2>SEARCH MUSIC</h2>

        <article className='grid-1-3' >




<SongForm  handleSearch={handleSearch} />

{loader&& <Loader/>}
{search&&!loader &&<SongDetail  search={search}  lyric={lyric}  bio={bio}    />
}

        </article>


    </div>
  )
}
