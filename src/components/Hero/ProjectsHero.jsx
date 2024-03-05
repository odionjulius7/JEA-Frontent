import "./Hero.css";
import Header from "../Header/Header";
import ProjectsTab from "../FindProperties/ProjectsTab";

const ProjectsHero = ({ projs }) => {
  return (
    <div className="App--projs text-white">
      <div>
        <div className="white-gradient" />
        <Header />
        <div className="container-fluid">
          <div className="row py-5">
            <div className="col-md-4 col-sm-8 mx-auto d-flex flex-column justify-content-center align-items-center gap-3">
              <h1 className="h1-one mt-5 mb-4">Our Projects</h1>
            </div>
          </div>
          <div className="row py-5">
            <ProjectsTab projs={projs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHero;
