import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table, Button } from "reactstrap";

function AppointmentAndFeedback() {
  return (
    <>
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader >
              <div className="row">
                <CardTitle tag="h2" className='title col-xl-8'>Appointments</CardTitle>
            </div>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>00012421</td>
                    <td>2/1/2023</td>
                    <td>2:30 - 3:00</td>
                    <td>Dakota Rice</td>
                    <td>Male</td>
                    <td>dakotarice@abc.com</td>
                    <td>+251-91-234-1233</td>
                    <td><Button>More...</Button></td>
                  </tr>
                  <tr>
                    <td>00012423</td>
                    <td>2/1/2023</td>
                    <td>3:00 - 3:30</td>
                    <td>Minerva Hooper</td>
                    <td>Male</td>
                    <td>minervahooper@abc.com</td>
                    <td>+251-91-234-5432</td>
                    <td><Button>More...</Button></td>
                  </tr>
                  <tr>
                    <td>00012413</td>
                    <td>2/1/2023</td>
                    <td>3:30 - 4:00</td>
                    <td>Sage Rodriguez</td>
                    <td>Female</td>
                    <td>minervahooper@abc.com</td>
                    <td>+251-91-344-5432</td>
                    <td><Button>More...</Button></td>
                  </tr>
                  <tr>
                    <td>00067893</td>
                    <td>2/1/2023</td>
                    <td>4:00 - 4:30</td>
                    <td>Philip Chaney</td>
                    <td>Female</td>
                    <td>minervahooper@abc.com</td>
                    <td>+251-91-735-5432</td>
                    <td><Button>More...</Button></td>
                  </tr>
                  <tr>
                    <td>00074392</td>
                    <td>2/1/2023</td>
                    <td>6:00 - 6:30</td>
                    <td>Doris Greene</td>
                    <td>Female</td>
                    <td>dorisgreene@abc.com</td>
                    <td>+251-91-766-5679</td>
                    <td><Button>More...</Button></td>
                  </tr>
                  <tr>
                    <td>00045678</td>
                    <td>2/1/2023</td>
                    <td>8:00 - 8:30</td>
                    <td>Mason Porter</td>
                    <td>Female</td>
                    <td>masonporter@abc.com</td>
                    <td>+251-91-766-9875</td>
                    <td><Button>More...</Button></td>
                  </tr>
                  <tr>
                    <td>00025673</td>
                    <td>2/1/2023</td>
                    <td>8:30 - 9:00</td>
                    <td>Jon Porter</td>
                    <td>Male</td>
                    <td>jonporter@abc.com</td>
                    <td>+251-91-766-1432</td>
                    <td><Button>More...</Button></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
    </>
  );
}

export default AppointmentAndFeedback;
