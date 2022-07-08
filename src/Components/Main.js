import React from "react";
import ListItem from "./ListItem";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="main-section">
        <ul className="list-container">
          <ListItem
            title="declarative"
            desc="React does one job and does it well. We only ask react to do what we want it to do without caring how it does it"
          />
          <ListItem
            title="create-react-app"
            desc="CRA is a commandline tool that helps us scaffold a react application"
          />
          <ListItem
            title="webpack"
            desc="Webpack helps bundle our code and minifies it in production"
          />
          <ListItem
            title="babel"
            desc="Babel helps transpile our code into an older version of javascript that can be understood by all browsers"
          />
        </ul>
      </div>
    </>
  );
};

export default Main;
