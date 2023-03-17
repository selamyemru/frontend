import React from 'react';

import LandingNavbar from "../../components/Navbars/LandingNavbar";
import GuestFooter from "../../components/Footer/GuestFooter";
import Feedback from "../../components/Feedback/Feedback";
import MakeAppModal from "../../components/Appointment/MakeAppModal"
import DeleteAppModal from "../../components/Appointment/DeleteAppModal"

import { Container } from "reactstrap";

export default function AppointmentForm() {
  return(
    <>
      <LandingNavbar />
      <Container>
        <div className="m-4 p-4" />
        <h1>REQUEST AN APPOINTMENT</h1>
        <ul>
          <li >
            To use more than one passport is strictly prohibited
          </li>
          <li >
            Ordinary passport Applicant who have already passport should not be apply for new passport.
          </li>
          <li >
            Bring your original documents including your passport during collection.
          </li>
          <li >
            New applicants who are unable to attend on the appointment date can be served only within fifteen(15) consecutive days will be served with a penalty fee of 150 ETB.
          </li>
          <li >
            New applicants who are unable to attend on the appointment date and which the appointment date is &gt; 16 and &lt; 30 consecutive days will be served with a penalty fee of 300 ETB.
          </li>
          <li >
            New applicants who are unable to attend on the appointment and which &gt; 30 consecutive days will apply again.
          </li>
        </ul>
        <div className='d-flex justify-content-center align-items-center m-5'>
          <MakeAppModal buttonLabel="Make New Appointment" />
          <Feedback buttonLabel="Give Feedback" />
          <DeleteAppModal buttonLabel="Delete Appointment" />
        </div>
        <GuestFooter />
      </Container>
    </>
  )
}