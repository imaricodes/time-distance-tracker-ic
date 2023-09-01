"use client";

import { useState } from "react";
import NavBarModal from "./NavBarModal";

export default function Hamburger({ links }) {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }
  return (
    <>
      <div onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {showModal && <div onClick={handleCloseModal}></div>}
      {showModal && <NavBarModal links={links} onClose={handleCloseModal} />}
    </>
  );
}
