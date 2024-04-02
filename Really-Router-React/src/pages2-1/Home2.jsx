import { useParams, useSearchParams } from "react-router-dom";
import { Menu2 } from "../Components2/Menu2";
import { useEffect, useState } from "react";
import { Search } from "../Components2/Search";
import { useFetch } from "../Hooks/useFetch";
import { Profile } from "./Profile";




export function Home2() {
  const [user, setUser] = useState(null);
  const [params, setParams] = useSearchParams();
  const [nofound, setnoFound] = useState(false);

  let paramUser = params.get("user");
  const findUser = (user1) => {
    if (user && user1) {
      let object = user.find(
        (u) => u.name.toLowerCase() === user1.toLowerCase()
      );

      
      if (object) {
       
        return object;
       
      } else {
        setnoFound(true);
        return false
      }
    } else {
      return false;
    }
  };

  let userS = findUser(paramUser);

  return (
    <>
      <Menu2></Menu2>

      <Search setUser={setUser} setParams={setParams} />
   

      {!nofound && userS &&(
        <Profile
          name={userS.name}
          email={userS.email}
          city={userS.address.city}
        />
      )}
{nofound ?"HOLA":"TODO BIEN"}
    
    </>
  );
}
