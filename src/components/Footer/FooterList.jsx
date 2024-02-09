import React from "react";
import { Link } from "react-router-dom";

const FooterList = ({ List, url_links }) => {
  // console.log(List);

  return (
    <ul className="list-group footer-list">
      {List?.map((item, i) => {
        return (
          <li key={i} class="list-group-item">
            <Link
              to={`/${
                url_links[i] === "home" || !url_links[i] ? "" : url_links[i]
              }`}
            >
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterList;
