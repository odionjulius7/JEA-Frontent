import "./Hero.css";
import Header from "../Header/Header";
import { useState } from "react";

const SelectedBlogHero = () => {
  const [homePage, setHomePage] = useState(false);

  return (
    <div className="App--selected-blog text-white">
      <div>
        <div className="white-gradient" />
        <Header />
        <div className="container-fluid py-5"></div>
      </div>
    </div>
  );
};

export default SelectedBlogHero;
