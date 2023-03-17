import React from "react";
import AddResidentModal from "../../../components/UserManagement/AddResident";
import AddPublisherModal from "../../../components/UserManagement/AddPublisher";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

function UserManagement() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader >
                <div className="row">
                  <CardTitle tag="h2" className='title col-xl-8'>Manage <b>Residents</b></CardTitle>
                  <div className="d-flex float-right col-xl-4">
                    <AddResidentModal buttonLabel="Add New Resident" />
                  </div>
              </div>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Birth Place</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>...</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Male</td>
                      <td>Kenya, Haitas</td>
                      <td>dakotarice@abc.com</td>
                      <td>+251-91-234-1233</td>
                      <th><Button>More...</Button></th>
                      <td className="text-center">
                        <Button className="btn btn-primary"><i className="fa fa-edit"></i></Button>
                        <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Male</td>
                      <td>Denmark, Fulslit</td>
                      <td>minervahooper@abc.com</td>
                      <td>+251-91-234-5432</td>
                      <th><Button>More...</Button></th>
                      <td className="text-center">
                        <Button className="btn btn-primary"><i className="fa fa-edit"></i></Button>
                        <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Female</td>
                      <td>Netherlands, Baileux</td>
                      <td>minervahooper@abc.com</td>
                      <td>+251-91-344-5432</td>
                      <th><Button>More...</Button></th>
                      <td className="text-center">
                        <Button className="btn btn-primary"><i className="fa fa-edit"></i></Button>
                        <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Female</td>
                      <td>South Korea, Overland Park</td>
                      <td>minervahooper@abc.com</td>
                      <td>+251-91-735-5432</td>
                      <th><Button>More...</Button></th>
                      <td className="text-center">
                        <Button className="btn btn-primary"><i className="fa fa-edit"></i></Button>
                        <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Female</td>
                      <td>South Korea, Overland Park</td>
                      <td>dorisgreene@abc.com</td>
                      <td>+251-91-766-5679</td>
                      <th><Button>More...</Button></th>
                      <td className="text-center">
                        <Button className="btn btn-primary"><i className="fa fa-edit"></i></Button>
                        <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Female</td>
                      <td>Malawi, Feldkirchen in Kärnten</td>
                      <td>masonporter@abc.com</td>
                      <td>+251-91-766-9875</td>
                      <th><Button>More...</Button></th>
                      <td className="text-center">
                        <Button className="btn btn-primary"><i className="fa fa-edit"></i></Button>
                        <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Male</td>
                      <td>Portugal, Gloucester</td>
                      <td>jonporter@abc.com</td>
                      <td>+251-91-766-1432</td>
                      <th><Button>More...</Button></th>
                      <td className="text-center">
                        <Button className="btn btn-primary"><i className="fa fa-edit"></i></Button>
                        <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <div className="row">
                  <CardTitle tag="h2" className='title col-xl-8'>Manage <b>Publishers</b></CardTitle>
                  <div className="d-flex float-right col-xl-4">
                    <AddPublisherModal buttonLabel="Add New Publisher" />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Male</td>
                      <td>dakotarice@abc.com</td>
                      <td>+251-91-234-1233</td>
                      <td className="text-center">
                        <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Female</td>
                      <td>minervahooper@abc.com</td>
                      <td>+251-91-234-5432</td>
                      <td className="text-center">
                        <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Male</td>
                      <td>minervahooper@abc.com</td>
                      <td>+251-91-344-5432</td>
                      <td className="text-center">
                        <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Male</td>
                      <td>minervahooper@abc.com</td>
                      <td>+251-91-735-5432</td>
                      <td className="text-center">
                        <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Female</td>
                      <td>dorisgreene@abc.com</td>
                      <td>+251-91-766-5679</td>
                      <td className="text-center">
                        <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Female</td>
                      <td>masonporter@abc.com</td>
                      <td>+251-91-766-9875</td>
                      <td className="text-center">
                        <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Male</td>
                      <td>jonporter@abc.com</td>
                      <td>+251-91-766-1432</td>
                      <td className="text-center">
                        <Button className="btn btn-danger"><i className="fa fa-trash"></i></Button>
                      </td>
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

export default UserManagement;
