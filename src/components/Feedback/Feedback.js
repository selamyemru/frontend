import React from 'react';
import {
    Button, Modal, ModalBody, ModalHeader, Input, Label, Form, FormGroup
} from "reactstrap"

import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function App() {
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
  
    // Modal open state
    const [modal, setModal] = React.useState(false);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);
  
    return (
        <>
          <Button color="warning" className='m-3'
            onClick={toggle}>Give Feedback And Rating</Button>
          <Modal isOpen={modal}
            toggle={toggle}
            modalTransition={{ timeout: 20 }}>
            <ModalHeader toggle={toggle}>Feedback and Rating</ModalHeader>
            <ModalBody>
                <Form>
                  <FormGroup>
                    <Label for="id">Appointment ID</Label>
                    <Input className="text-dark" type="text" name="id" id="id" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="rating">Rating</Label>
                    <Box
                      sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                          setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                      />
                      {value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                      )}
                    </Box>
                  </FormGroup>
                  <FormGroup>
                    <Label for="feedback">Feedback</Label>
                    <textarea type="text" className='d-block w-100'></textarea>
                  </FormGroup>
                  <Button className="float-right">Submit</Button>
                </Form>
            </ModalBody>
          </Modal>
        </ >
    );
}
  
export default App;