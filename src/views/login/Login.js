import React from "react";
import { useHistory } from "react-router-dom";

import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledAlert
} from "reactstrap";

// core components
import LandingNavbar from "components/Navbars/LandingNavbar.js";
import GuestFooter from "components/Footer/GuestFooter.js";

export default function Login() {
  const history = useHistory();
  
  const authenticate = () =>{ 
    var usernameEl = document.getElementById("username")
    var passwordEl = document.getElementById("password")
    var alert = document.getElementById("alert")
    if (usernameEl.value==="admin" && passwordEl.value==="ghjklsfada") {
      usernameEl.value = ''
      passwordEl.value = ''
      let path = `/admin`; 
      history.push(path);
    }else if (usernameEl.value==="resident" && passwordEl.value==="ghjklsfada") {
      usernameEl.value = ''
      passwordEl.value = ''
      let path = `/resident`; 
      history.push(path);
    }else if (usernameEl.value==="publisher" && passwordEl.value==="ghjklsfada") {
      usernameEl.value = ''
      passwordEl.value = ''
      let path = `/publisher`; 
      history.push(path);
    }else {
      alert.style.display = "block"
    }
    usernameEl.value = ''
    passwordEl.value = ''
  }

  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <>
      <LandingNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                  <Card className="card-register">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("assets/img/square-purple-1.png")}
                      />
                      <CardTitle tag="h4" className="px-3">Login</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                        <InputGroup
                          className={classnames({
                            "input-group-focus": fullNameFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-user" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id="username"
                            className="font-weight-bold"
                            placeholder="Username"
                            type="text"
                            onFocus={(e) => setFullNameFocus(true)}
                            onBlur={(e) => setFullNameFocus(false)}
                            required
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": passwordFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fa fa-key" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id="password"
                            className="font-weight-bold"
                            placeholder="Password"
                            type="password"
                            onFocus={(e) => setPasswordFocus(true)}
                            onBlur={(e) => setPasswordFocus(false)}
                            required
                          />
                        </InputGroup>
                      </Form>
                      <div id="alert" style={{display:'none'}}>
                        <UncontrolledAlert className="alert-with-icon" color="danger">
                          <span data-notify="icon" className="fa fa-times" />
                          <span>
                            <b>Incorrect Credentials!</b>
                          </span>
                        </UncontrolledAlert>
                      </div>
                    </CardBody>
                    <CardFooter>
                      <Button className="btn-round" color="primary" size="lg" onClick={authenticate}>
                        Log in
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
        <GuestFooter />
      </div>
    </>
  );
}
