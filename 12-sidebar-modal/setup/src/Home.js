import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openSideBar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClickCapture={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
