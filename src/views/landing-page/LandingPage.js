import React from "react";

// reactstrap components
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

// core components
import LandingNavbar from "../../components/Navbars/LandingNavbar.js";
import GuestFooter from "../../components/Footer/GuestFooter.js";

export default function GuestLanding() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <LandingNavbar />
      <div className="wrapper">
        <div className="page-header header-filter">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <div className="squares square7" />
          <Container>
            <div className="content-center brand">
              <h1 className="h1-seo">Welcome!</h1>
              <h3 className="d-none d-sm-block">
                Kebele Service Management System
              </h3>
              <Link to="/appointment-form" tag={Link} class="btn btn-outline-neutral btn-round btn-danger btn-lg btn-fill">Appointment</Link>
              <Link to="/login" type="button" class="btn btn-outline-neutral btn-round btn-danger btn-lg btn-fill">Log In</Link>
            </div>
          </Container>
        </div>
        <div className="main">
          <div className="section section-dark text-center">
            <div className="container">
              <h2 className="title">Let's talk about us</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-profile card-plain">
                    <div className="card-avatar">
                        <img src='{require("img-holder")}' alt="..." height='100' />
                    </div>
                    <div className="card-body">
                      <a href="#paper-kit">
                        <div className="author">
                          <h4 className="card-title">Henry Ford</h4>
                          <h6 className="card-category">Product Manager</h6>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.
                      </p>
                    </div>
                    <div className="card-footer text-center">
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-twitter"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-google-plus"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-profile card-plain">
                    <div className="card-avatar">
                      <img src="" alt="..." />
                    </div>
                    <div className="card-body">
                      <a href="#paper-kit">
                        <div className="author">
                          <h4 className="card-title">Sophie West</h4>
                          <h6 className="card-category">Designer</h6>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.
                      </p>
                    </div>
                    <div className="card-footer text-center">
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-twitter"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-google-plus"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-profile card-plain">
                    <div className="card-avatar">
                        <img src="" alt="..."/>
                    </div>
                    <div className="card-body">
                        <div className="author">
                          <h4 className="card-title">Robert Orben</h4>
                          <h6 className="card-category">Developer</h6>
                        </div>
                      <p className="card-description text-center">
                        The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.
                      </p>
                    </div>
                    <div className="card-footer text-center">
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-twitter"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-google-plus"></i></a>
                      <a href="#pablo" className="btn btn-link btn-just-icon btn-neutral"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GuestFooter />
      </div>
    </>
  );
}
