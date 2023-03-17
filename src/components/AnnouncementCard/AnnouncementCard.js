import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  Row,
  Col
} from "reactstrap";

function AnnouncementCard(props) {
  return (
    <>
        <div className="content">
          <Row md="12">
            <Col md="10 text-center">
              <Card>
                <CardHeader>
                    <Button id={props.id} className="btn btn-danger m-auto float-right">Delete</Button>
                    <h2 className="title">{props.title}</h2>
                    <h5 className="description">Subject: {props.subject}</h5>
                </CardHeader>
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <img
                      alt="..."
                      className=""
                      src={require(`../../assets/img/announcements/${props.photoUrl}`)}
                      height="1000"
                      width="800"
                    />
                  </div>
                </CardBody>
                <CardFooter>
                    <p className="float-right">{props.date}</p>
                </CardFooter>
              </Card>
            </Col>
        </Row>
      </div>
    </>
  );
}

export default AnnouncementCard;
