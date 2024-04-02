

import React,{useState} from 'react'
import { FormMusic } from './FormMusic';
import { helpHttp } from '../helper/helpHttp';
import {Loader}  from "./Loader";
export const GetMusic = () => {

const [artist, setArtist] = useState(null);
const [song, setsong] = useState(null);
const [loader, setLoader] = useState(false);
  

   
const searchArtist= (artist)=>{
    setLoader(true)
    let  artistAPI=`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`; 
helpHttp().get(artistAPI)
.then(data=>{
    if(!data.err){
      setArtist({name:data.
        artists[0]
        .strArtist,img:data.
        artists[0]
        .strArtistCutout
      })
     
      console.log(data)
    }else{
        console.log(data)
    }
    setLoader(false)
})
}
    

const searchSong= (artist,song)=>{
    
let  songAPI=`https://api.lyrics.ovh/v1/${artist}/${song}`; 
helpHttp().get(songAPI)
.then(data=>{
    if(!data.err){
       
setsong(data.lyrics)
        console.log(data)
    }else{
        console.log(data)
    }
    setLoader(false)
})
}

  return (
    <div className="grid-music">

<FormMusic searchArtist={searchArtist} searchSong={searchSong}  />




{loader&&<Loader/>}
{artist&&
<article className='artist'>
<h2>{artist.name}</h2>

<img src={artist.img} alt=""/>
</article>

}


{song?  <article  className='song'>
<p>{song}</p>


</article> :""}

</div>
  )
}
