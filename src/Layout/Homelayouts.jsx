import React from "react";
import Header from "../Components/Header";
import LetasNews from "../Components/LetasNews";
import Navbar from "../Components/Navbar";
import LeftSideBar from "../Components/LeftSideBar";
import { Outlet } from "react-router";
import RightSideBar from "../Components/RightSideBar";

const Homelayouts = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <header className="">
        <Header></Header>
        <section>
          <LetasNews></LetasNews>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="grid grid-cols-12 gap-15  ">
        <aside className="col-span-2 sticky top-0 h-fit ">
          <LeftSideBar></LeftSideBar>
        </aside>
        <section  className="col-span-8 ">
          <Outlet></Outlet>
        </section>
        <aside  className="col-span-2 sticky top-0 h-fit  ">
          <RightSideBar></RightSideBar>
        </aside>
      </main>
    </div>
  );
};

export default Homelayouts;
