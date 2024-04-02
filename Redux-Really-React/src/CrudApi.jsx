import React, { useContext } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Messaje } from "./Messaje";
import CrudContext from "../Context/CrudContext";

const CrudApi = () => {

const {loading,error,db}=useContext(CrudContext);
  return (
  <>
  
  
  <h2>CRUD API</h2>

<article className="grid-1-2">
  

<CrudForm
  
  />

  {loading && <Loader />}
  {error && (
    <Messaje
      msg={`Error  ${error.status}: ${error.statusText}`}
      bgColor={"red"}
    />
  )}

  {db && (
    <CrudTable
    db={db}
    />
  )}

    


</article>

  </>
  );
};

export default CrudApi;
