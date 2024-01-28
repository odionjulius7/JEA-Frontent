import React from "react";

const FooterList = ({ List }) => {
  console.log(List);
  return (
    <ul className="list-group footer-list">
      {List?.map((item, i) => {
        return (
          <li key={i} class="list-group-item">
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default FooterList;
