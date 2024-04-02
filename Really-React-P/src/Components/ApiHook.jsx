import { useEffect, useState } from "react";

export function ApiHook() {
  const [pokemons, setPokemons] = useState([]);

  //FECTH + ASYCN FUNCTION=>
  //SE USA EL ARRAY VACIO PORQUE SOLO SE HACE LA PETICION CUANDO EL COMPONENTE ESTE EN EL DOM
  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();

      json.results.forEach(async (el) => {
        const res = await fetch(el.url),
          json = await res.json();
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon");
  }, []);

  //FETCH=>
  // useEffect(()=>{
  //     let url="https://pokeapi.co/api/v2/pokemon";

  //     fetch(url)
  //     .then(res=> res.ok?res.json():Promise.reject(res))
  //     .then(json=>{
  //       json.results.forEach((el,i)=>{
  //         fetch(el.url)
  //         .then(res=> res.json())
  //         .then(json=>{

  //             let pokemon={
  //                 avatar:json.sprites.front_default,
  //                 name:json.name,
  //                 id:json.id
  //             };

  //             setPokemons((pokemons)=>[...pokemons,pokemon])

  //         })

  //     })

  //     })

  // },[]);

  return (
    <>
      <h2>PETICIONES ASINCRONAS EN COMPONENTES FUNCIONALES</h2>

      {pokemons.map((el) => (
        <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
      ))}
    </>
  );
}

function Pokemon({ name, avatar }) {
  return (
    <>
      <figure>
        <img src={avatar} alt={name}></img>

        <figcaption>{name}</figcaption>
      </figure>
    </>
  );
}
