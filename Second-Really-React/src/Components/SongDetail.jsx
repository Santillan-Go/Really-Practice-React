import React from 'react'
import { SongArtist } from './SongArtist'
import { SongLyric } from './SongLyric'
import { Messaje} from './Messaje'
export const SongDetail = ({search, lyric,bio}) => {

if(!lyric|| !bio)  return null;


    return (
      <>
       

        {lyric.err || lyric.name === "AbortError" ? (
          <Messaje
            msg={`Error No existe la cancion ${search.song}`}
            bgColor="red"
          />
        ) : (
          <SongLyric title={search.song}  lyrics={lyric.lyrics}/>
        )}

        {bio.artists ? (
          <SongArtist artist={bio.artists[0]}/>
        ) : (
          <Messaje
            msg={`Error No existe el artista ${search.artist} `}
            bgColor="red"
          />
        )}
      </>
    );
}
