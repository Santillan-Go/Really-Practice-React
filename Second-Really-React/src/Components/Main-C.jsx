import { FormC } from "../Components2/FormC";
import { Modals2 } from "../Components2/Modals2";
import { ContactForm } from "./ContactForm";
import { CreateTask } from "./CreateTask";
import CrudApi from "./CrudApi";
import { CrudApp } from "./CrudApp";
import { GetMusic } from "./GetMusic";
import "./Main-C.css";
import { MineCrudApi } from "./MineCrudApi";
import { Modals } from "./Modals";
import { Peticiones } from "./Peticiones";
import { SearchMusic } from "./SearchMusic";
import { SelectAnidados } from "./SelectAnidados";
import { SelectFetch } from "./SelectFetch";

export function MainC() {
  return (
    <>
      <main className="main">






<Modals2/>

<hr />

<FormC/>


{/* 
<Modals/>
        <hr />
<ContactForm/>

<hr />
<SelectAnidados/>
        <hr />
 <SelectFetch/> 

<hr />
      <SearchMusic/>

        <section className="cards">
 <Peticiones /> 
        </section>
        <hr />
  <CrudApi/>  
        <hr />
<CrudApp/>
<hr />
<CreateTask/>


<hr />
<MineCrudApi/>
 <GetMusic/> 
<hr /> */}

      </main>
    </>
  );
}
