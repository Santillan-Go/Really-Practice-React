import React,{useState,useEffect} from "react";

const taskInitial = {
  name: "",
  email: "",
  id: null,
};

export const CreateForm = ({getData}) => {
  const [form, setForm] = useState(taskInitial);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


const theSubmit=(e)=>{


e.preventDefault();
if(!form.name||!form.email) return  alert("Fill the fields")

getData(form)


setForm(taskInitial);
e.target.reset();
}



  return (
    <div>
      <form action=""  onSubmit={theSubmit}  className="fomrMine">
        <input
          type="text"
          value={form.name}
          onChange={handleChange}
          name="name"
          placeholder="Name"
        />

        <input
          type="email"
          value={form.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
        />

        <input type="submit" />
      </form>
    </div>
  );
};
