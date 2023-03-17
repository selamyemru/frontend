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
        <Button className='m-3' color="info" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader class="font-weight-bold fs-2" toggle={this.toggle}>Add New Publisher</ModalHeader>
          <ModalBody>
            <Form>
                <FormGroup>
                  <Label for="FirstName">FirstName</Label>
                  <Input className="text-dark" type="text" name="firstName" id="FirstName" />
                </FormGroup>
                <FormGroup>
                  <Label for="MiddleName">Father Name</Label>
                  <Input className="text-dark" type="text" name="middleName" id="MiddleName" />
                </FormGroup>
                <FormGroup>
                  <Label for="LastName">Grand Father Name</Label>
                  <Input className="text-dark" type="text" name="lastName" id="LastName" />
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
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input className="text-dark" type="email" name="email" id="email" />
                </FormGroup>
                <FormGroup>
                  <Label for="tel">Phone Number</Label>
                  <Input className="text-dark" type="tel" name="tel" id="tel" />
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
