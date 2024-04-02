

import React from 'react'

export const FormMusic = ({searchArtist,searchSong}) => {


const Submit=(e)=>{
e.preventDefault();
if(!e.target.artist||!e.target.song) return alert("Fill the field")
let artist=e.target.artist.value,
song=e.target.song.value;
searchArtist(artist)
searchSong(artist, song)
e.target.reset()
}

  return (
    <div className='divForm' onSubmit={Submit} >
<form action=""   className='formMusic'>
<input type="text"  name='artist'   placeholder='Artist'/>
<input type="text"  name='song'  placeholder='Song' />
<input type="submit" />
</form>
</div>
  )
}
