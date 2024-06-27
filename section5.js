"use client";
import React, { useEffect, useState } from "react";

function SectionFive() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 767) {
        setIsMobile(!isMobile);
      }
      if (window.innerWidth <= 991) {
        setIsTablet(!isTablet);
      }
      if (window.innerWidth <= 1500) {
        setIsLaptop(!isLaptop);
      }
    }
    const wrapper = document.querySelector(".words");
    const words = wrapper.querySelectorAll("span");
    const currentWord = wrapper.querySelector("span.current");
    const wordsWidths = Array.from(words).map((word) => word.offsetWidth);
    const maxWordsWidth = Math.max(...wordsWidths);
    const CURRENT_CLASS = "current";
    const NEXT_CLASS = "next";

    wrapper.style.setProperty("--width", `${currentWord.offsetWidth}px`);
    wrapper.style.setProperty("--width-mobile", `${maxWordsWidth}px`);

    const setIntervalId = setInterval(() => {
      const currentWord = wrapper.querySelector("span.current");
      const nextWord = wrapper.querySelector("span.next");
      const nextNextWord = nextWord.nextElementSibling
        ? nextWord.nextElementSibling
        : wrapper.firstElementChild;
      currentWord.classList.remove(CURRENT_CLASS);
      nextWord.classList.remove(NEXT_CLASS);
      nextWord.classList.add(CURRENT_CLASS);
      nextNextWord.classList.add(NEXT_CLASS);
      wrapper.style.setProperty("--width", `${nextWord.offsetWidth}px`);
    }, 3500);

    return () => {
      clearInterval(setIntervalId);
    };
  }, []);
  return (
    <>
      <div className={`home-section-5 ${isTablet ? "py-2" : "pt-5"}`}>
        <div className="content_book d-flex justify-content-center align-items-center">
          <h1 class="words-wrapper">
            Book OZ OVE for
            <span class="words">
              <span class="current">Concerts</span>
              <span class="next">Weekend Getaway</span>
              <span>Sporting Match</span>
              <span>Birthday Bash</span>
              <span>Festival Fun</span>
              <span>Beach Day</span>
              <span>Business Events</span>
              <span>Wine tours</span>
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default SectionFive;
