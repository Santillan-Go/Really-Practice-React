import React from 'react'

export const SongArtist = ({artist}) => {
  
  
    return (
    <section>


<h3>{artist.strArtist}</h3>


<img src={artist.strArtistThumb} alt="img" /> 

<p>{artist.intFormedYear-(artist.intDiedYear||"Presente")}</p>
<p>{artist.strCountry}</p>
<p>{artist.strGenre}</p>
<a href={`https://${artist.trLastFMChart}`
}  target='_blank'>See...</a>
<p>{artist.strBiographyEN
}</p>
    </section>
  )
}
