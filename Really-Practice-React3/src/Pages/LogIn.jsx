import { useNavigate } from "react-router-dom";
import { FormLog } from "../Components/FormLog";
import "./LogIn.css";
import { useContext } from "react";
import LogInContext from "../context/LogInContext";

export const LogIn = () => {
//   const juan = {
//     user: "Juan Carlos",
//     password: "Santy1986?",
//   };
const navigate=useNavigate()
const {setUser}=useContext(LogInContext)

  const verify = (data) => {
    let { user, password } = data;

    fetch(`http://localhost:5000/Users`)
      .then((res) => res.json())
      .then((data) => {
        let find = data.find(
          (u) => u.log.user === user && u.log.password === password
        );
        // console.log(find)
        // console.log(data)

        if (find) {
navigate("/")
localStorage.setItem("id",JSON.stringify(find.id))
localStorage.setItem("user",JSON.stringify(find))

//setUser(find)
        } else {
          return;
        }
      });
    // if(juan.user===user&&juan.password===password){
    //     console.log("good")
    // }else{
    //     console.log("bad")
    // }
  };

  return (
    <section className="log-content">
      <h2>LOG IN</h2>

      <FormLog verify={verify} />
    </section>
  );
};
