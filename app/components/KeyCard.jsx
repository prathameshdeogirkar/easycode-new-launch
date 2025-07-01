"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const KeyCard = ({ index, point }) => {
  const boxRef = useRef(null);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleOpening = () => {
    gsap.to(boxRef.current, {
      height: "auto",
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      display: "block",
    });
  };

  const handleClosing = () => {
    gsap.to(boxRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        boxRef.current.style.display = "none";
      },
    });
  };

  const toggleCard = () => {
    if (!isCardOpen) {
      handleOpening();
      setIsCardOpen(true);
    } else {
      handleClosing();
      setIsCardOpen(false);
    }
  };

  return (
    <>
      <div className="min-h-[90px] border-t-[1px] border-t-white mb-10 mt-2 px-5 text-3xl flex items-center justify-between">
        <span className="text-xl sm:text-4xl">
          <span>{index + 1}. </span>
          {point?.point_name}
        </span>
        <span
          className="text-blue-500 text-2xl cursor-pointer"
          onClick={toggleCard}
        >
          <span className="text-xl sm:text-2xl">more </span>
          <i
            className={`${
              isCardOpen ? "ri-arrow-up-line" : "ri-arrow-down-line"
            }`}
          ></i>
        </span>
      </div>

      <div
        ref={boxRef}
        className="key-points-box text-xl overflow-hidden opacity-0 hidden px-5"
        style={{ height: 0 }}
      >
        <span className="inline-block mb-10">{point?.point_description}</span>
      </div>
    </>
  );
};

export default KeyCard;
