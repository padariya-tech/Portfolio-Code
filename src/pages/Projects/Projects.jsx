import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import projectImage1 from '../../utils/data/project1.png';
import projectImage2 from '../../utils/data/project2.png';
import projectImage3 from '../../utils/data/project3.png';

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
         Below given list contain top three project belong to Web Development
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src={projectImage1}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      PortFolio Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/padariya-tech/Portfolio"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Big-Data Visualization</span>
                  <img
                    src={projectImage2}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Python</span>
                  <span className="card-detail-badge">Dash</span>
                  
                  <span className="card-detail-badge">Plotly</span>

                 
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">IPL-Data-Visualization</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/padariya-tech/IPL-Data-Visualization"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Machine Learning / Natural Language Processing</span>
                  <img
                    src={projectImage3}
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  {/* <span className="card-detail-badge">Machine Learning</span> */}
                  <span className="card-detail-badge">Deep Learning</span>
                  <span className="card-detail-badge">Fine Tunning</span>
                  {/* <span className="card-detail-badge">Model</span> */}
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Text-Summarization</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/padariya-tech/Text-Summarization-on-Indian-Language">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;