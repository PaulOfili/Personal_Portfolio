import React from 'react';
import './style/main.scss'
import PaulPic from './assets/img/PaulMainPic.jpg'
function App() {
  return (
    <div className="container">
    <header id="main-header">
      <div className="row no-gutters">
        <div className="col-lg-4 col-md-5">
          <img src={PaulPic} alt=""/>
        </div>
        <div className="col-lg-8 col-md-7">
          <div className="d-flex flex-column">
            <div className="p-5 bg-dark text-white">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h1 className="display-3">Paul Ofili</h1>
                <div className="d-none d-md-block">
                  <a href="http://twitter.com" className="text-white">
                    <i className="fab fa-twitter social-icons"></i>
                  </a>
                </div>
                <div>
                  <a href="http://facebook.com" className="text-white">
                    <i className="fab fa-facebook social-icons"></i>
                  </a>
                </div>
                <div>
                  <a href="http://instagram.com" className="text-white">
                    <i className="fab fa-instagram social-icons"></i>
                  </a>
                </div>
                <div>
                  <a href="http://github.com" className="text-white">
                    <i className="fab fa-github social-icons"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-black panel-heading">
              Experienced Full Stack Web Developer, Budding Data scientist and Algorithm Enthusiast.
            </div>

            <div>
              <div className="d-flex flex-row text-white align-items-stretch text-center">
                <div className="port-item p-4 bg-primary" data-toggle="collapse" data-target="#home">
                  <i className="fas fa-home fa-2x d-block"></i>
                  <span className="d-none d-sm-block">Home</span>
                </div>
                <div className="port-item p-4 bg-success" data-toggle="collapse" data-target="#resume">
                  <i className="fas fa-graduation-cap fa-2x d-block"></i>
                  <span className="d-none d-sm-block">Resume</span>
                </div>
                <div className="port-item p-4 bg-warning" data-toggle="collapse" data-target="#work">
                  <i className="fas fa-folder-open fa-2x d-block"></i>
                  <span className="d-none d-sm-block">Work</span>
                </div>
                <div className="port-item p-4 bg-danger" data-toggle="collapse" data-target="#contact">
                  <i className="fas fa-envelope fa-2x d-block"></i>
                  <span className="d-none d-sm-block">Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
  );
}

export default App;
