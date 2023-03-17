/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

class MakeAppModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader class="font-weight-bold fs-2" toggle={this.toggle}>Make Appointment</ModalHeader>
          <ModalBody>
            <Form>
                <FormGroup>
                  <Label for="FirstName">FirstName</Label>
                  <Input className="text-dark" type="text" name="firstName" id="FirstName" />
                </FormGroup>
                <FormGroup>
                  <Label for="MiddleName">Middle Name</Label>
                  <Input className="text-dark" type="text" name="middleName" id="MiddleName" />
                </FormGroup>
                <FormGroup>
                  <Label for="LastName">Last Name</Label>
                  <Input className="text-dark" type="text" name="lastName" id="LastName" />
                </FormGroup>
                <FormGroup>
                  <Label for="LastName">Date of Birth</Label>
                  <Input className="text-dark" type="date" name="lastName" id="Last Name" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Country of Birth:</Label>
                  <Input className="text-dark bg-light" type="select" name="select" id="exampleSelect" disabled>
                    <option>Ethiopia</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">City of Birth:</Label>
                  <Input className="text-dark bg-light" type="select" name="select" id="exampleSelect" disabled>
                    <option>Addis Ababa</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Gender</Label>
                  <FormGroup check>
                    <Label check className="text-dark">
                      <Input type="radio" name="radio1" />{' '}
                      Male
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check className="text-dark">
                      <Input type="radio" name="radio1" />{' '}
                      Female
                    </Label>
                  </FormGroup>
                </FormGroup>
                <Button className="float-right">Submit</Button>
              </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MakeAppModal;
