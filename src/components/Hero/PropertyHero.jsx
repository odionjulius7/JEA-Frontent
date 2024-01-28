import "./Hero.css";
import Header from "../Header/Header";
import FindProperties from "../FindProperties/FindProperties";
const PropertyHero = () => {
  return (
    <div className="App--prop text-white">
      <div>
        <div className="white-gradient" />
        <Header />
        <div className="row py-5">
          <div className="col-4 mx-auto d-flex flex-column justify-content-center align-items-center gap-3">
            <h1 className="h1-one">Our Properties</h1>
            <img src="./long.png" alt="" className="fit-content" />
            <span>Elite Properties for Sale in Nigeria</span>
          </div>
        </div>
        <div className="row py-5">
          <div className="col mx-auto">
            <FindProperties />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHero;
