import { NavLink, Outlet } from "react-router-dom";


export const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>WEB SITE HELP</h2>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
        voluptatibus est perspiciatis, reprehenderit eos praesentium nihil
        doloribus! Voluptas, eligendi itaque hic in at earum, quod, assumenda
        odit cum ipsum blanditiis!
      </p>
      <nav>

<NavLink  to={"faq"}>View the faq</NavLink>
<NavLink  to={"contact"}>Contact Us</NavLink>


      </nav>


      <Outlet></Outlet>



    </div>
  );
};
