import React, { useEffect, useState, Suspense } from "react";
import Footer from "../components/shared/Footer";
import Nav from "../components/shared/Nav";
import { Outlet } from "react-router-dom";
import loader from "../assets/images/header/loader.webp";

function Layouts() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(false);
    clearTimeout(myTimeout);
  };

  const myTimeout = setTimeout(handleLoading, 3000);

  return (
    <>
      {isLoading ? (
        <div className="loader_div">
          <img src={loader} className="loderImg" />
        </div>
      ) : (
        <>
          <Nav />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default Layouts;
