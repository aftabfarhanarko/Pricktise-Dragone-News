import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useLoaderData, useParams } from 'react-router';
import RightSideBar from '../Components/RightSideBar';

const NewsDetlise = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [finddata, setFinddata] = useState({});

    useEffect(() => {
        const func = () => {
            const filteras = data.find((element) => element.id == id);
            setFinddata(filteras);
        }
        return () => {
        func();
        }
    }, [data,id])
    return (
           <div>
      <header className="my-4 w-10/12 mx-auto ">
        <Header></Header>
        <nav className="my-6">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="grid grid-cols-12 w-10/12 mx-auto gap-16">
        <section className="col-span-9 ">
          <h1 className="text-md font-semibold">Dragon News</h1>

          <div className="flex flex-col space-y-6 border p-5 mt-3 rounded-lg border-base-300">
            <img
              className="rounded-lg h-[400px] "
              src={finddata.thumbnail_url}
            ></img>
            <h1 className="text-xl font-semibold">{finddata.title}</h1>
            <p className="text-accent leading-relaxed">{finddata.details}</p>
            <Link
              to={`/catagory/${finddata.category_id}`}
              className="btn btn-secondary w-[250px] "
            >
              <span className="text-lg font-extrabold">
                <BsArrowLeft />
              </span>
              All news in this category
            </Link>
          </div>
        </section>

        <aside className="col-span-3 ">
          <RightSideBar></RightSideBar>
        </aside>
      </main>
    </div>
    );
};

export default NewsDetlise;