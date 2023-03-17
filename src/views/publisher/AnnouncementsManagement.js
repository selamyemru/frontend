import React from "react";

import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard"
import Data from '../announcements/announcements.model.js'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Input,
  Form,
  FormGroup,
  Row,
  Col
} from "reactstrap";

function Tables() {
  return (
    <>
    <div className='content d-flex justify-content-center'>
    <Col md="11">
      <Card>
        <CardHeader className="text-center">
          <CardTitle tag="h2" className="title"><b>Add New Announcement</b></CardTitle>
        </CardHeader>
        <Form>
        <CardBody>
            <Row>
              <Col className="pr-md-1" md="6">
                <FormGroup>
                  <label>Title</label>
                  <Input
                    placeholder="Title"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col className="pl-md-1" md="6">
                <FormGroup>
                  <label>Subject</label>
                  <Input
                    placeholder="Subject"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <FormGroup>
                  <label>Image</label>
                  <Input
                    id="file"
                    placeholder="Select image..."
                    type="file"
                    className="text-white bg-dark"
                    style={{position: "relative", opacity: 1}}
                    onBlur={
                      ()=>{
                        document.getElementById("display").innerHTML = document.getElementById("file").value
                      }
                    }
                  />
                </FormGroup>
                <div id="display"></div>
              </Col>
            </Row>
          </CardBody>
          <CardFooter>
            <Button className="btn-fill float-right" color="primary" type="submit">
              Save
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </Col>
    </div>
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h1>Recent Announcements</h1>
      {Data.map((data,i)=>{
        return <>
            <AnnouncementCard title={Data[i].title} subject={Data[i].subject} date={Data[i].date} photoUrl={Data[i].photoUrl} />
          </>
      })
      }
    </div>
    </>
  );
}

export default Tables;
