import React, { useContext, useEffect } from "react";
import "./Home.css";
import { PostUser } from "../Components/PostUser";
import LogInContext from "../context/LogInContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { user } = useContext(LogInContext);
  let { posts } = user;

  const navigate = useNavigate();

  useEffect(() => {
    if (!user.user) {
      navigate("/log");
    } else {
    }
  }, [user]);
  return (
    <section className="Home-content">
      {/* <PostUser/>
        

<PostUser/>

<PostUser/> */}
      {posts && posts.length > 0 && posts.map((p) => <PostUser data={p} />)}
    </section>
  );
};
