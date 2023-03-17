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
          <ModalHeader class="font-weight-bold fs-2" toggle={this.toggle}>Add New Resident</ModalHeader>
          <ModalBody>
            <Form>
                <FormGroup>
                  <Label for="FirstName">First Name<span className="text-danger">*</span></Label>
                  <Input className="text-dark" type="text" name="firstName" id="FirstName" required />
                </FormGroup>
                <FormGroup>
                  <Label for="MiddleName">Father Name<span className="text-danger">*</span></Label>
                  <Input className="text-dark" type="text" name="middleName" id="MiddleName" required />
                </FormGroup>
                <FormGroup>
                  <Label for="LastName">Grand Father Name<span className="text-danger">*</span></Label>
                  <Input className="text-dark" type="text" name="lastName" id="LastName" required />
                </FormGroup>
                <FormGroup>
                  <Label>Gender<span className="text-danger">*</span></Label>
                  <FormGroup check>
                    <Label check className="text-dark">
                      <Input type="radio" name="radio1" value="Male" />{' '}
                      Male
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check className="text-dark">
                      <Input type="radio" name="radio1" value="Female" />{' '}
                      Female
                    </Label>
                  </FormGroup>
                </FormGroup>
                <FormGroup>
                  <Label for="bd">Date of Birth<span className="text-danger">*</span></Label>
                  <Input className="text-dark" type="date" name="bd" id="bd" required  required/>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Country of Birth<span className="text-danger">*</span></Label>
                  <Input className="text-dark bg-light" type="select" name="select" id="exampleSelect" disabled>
                    <option value="Ethiopia">Ethiopia</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="city">City of Birth<span className="text-danger">*</span></Label>
                  <Input className="text-dark" type="text" name="city" id="city"  required/>
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input className="text-dark" type="email" name="email" id="email"  required/>
                </FormGroup>
                <FormGroup>
                  <Label for="city">Phone Number<span className="text-danger">*</span></Label>
                  <Input className="text-dark" type="tel" name="city" id="city" required/>
                </FormGroup>
                <Button className="float-right">Add</Button>
              </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MakeAppModal;
