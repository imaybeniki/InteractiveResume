import React from "react";
import { useEffect, useState } from "react";
import "./header.css";

function Header(props) {
  const {stickyHeaderText, unstickyHeaderText} = props;
  const [headerText, setHeaderText] = useState(unstickyHeaderText);
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        if (headerText !== stickyHeaderText) {
          setHeaderText(stickyHeaderText);
        }
      } else {
        header.classList.remove("sticky");
        if (headerText !== unstickyHeaderText) {
          setHeaderText(unstickyHeaderText);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, [headerText, stickyHeaderText, unstickyHeaderText]);

  return (
    <div>
      <header id="myHeader" className="header">
        <h2><span>{headerText}</span></h2>
      </header>
    </div>
  );
}

export default Header;