import React from "react";

const ListItem = ({ title, desc }) => {
  // console.log(props);
  return (
    <>
      <li className="title">
        <h2>{title}</h2>{" "}
      </li>
      <li className="body">{desc}</li>
    </>
  );
};

export default ListItem;
