import "./Hero.css";
import Header from "../Header/Header";
import { useState } from "react";
import FindProperties from "../FindProperties/FindProperties";

const SelectedBlogHero = ({ searchPage }) => {
  const [homePage, setHomePage] = useState(false);

  return (
    <div className="App--selected-blog text-white">
      <div>
        <div className="white-gradient" />
        <Header />
        <div className="container-fluid py-5">
          {searchPage && (
            <div className="row py-5">
              <div className="col my-5 mx-auto">
                <FindProperties />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedBlogHero;
