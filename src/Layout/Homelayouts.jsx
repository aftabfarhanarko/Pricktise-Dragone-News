import React from "react";
import Header from "../Components/Header";
import LetasNews from "../Components/LetasNews";
import Navbar from "../Components/Navbar";

const Homelayouts = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto ">
        <Header></Header>
        <section>
          <LetasNews></LetasNews>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
    </div>
  );
};

export default Homelayouts;
