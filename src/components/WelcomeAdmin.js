import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

import styles from "./styles/NewsFeed.module.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

function WelcomeAdmin() {
  const [resData, setResData] = useState(null);

  let navigate = useNavigate();


  function showWarningToast(inputMessage) {
    toast.warn(inputMessage, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    console.log("toast");
  }

  return (
    <Container fluid className={styles.container}>
      <ToastContainer />
      <Formik>
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isInValid,
          errors,
        }) => (
          <Form>
            <Row className="mb-5 text-center">
              <h1 className="text-white bg-dark">Welcome !!</h1>
            </Row>
            <Row>
              <Form.Group as={Col} md="20">
                <Form.Label> <h3 className="border p-2"> We are exited to have you at Our FlipZon Shopping App </h3></Form.Label>
              </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} md="20">
                    <Form.Label> <h3></h3></Form.Label>
                </Form.Group>
            </Row>
            <Row >
              <Form.Group as={Col} md="12">
                <Form.Label> <h2 className="border p-2"> Please Choose the Operation to Perform From Left side Menu </h2></Form.Label>
              </Form.Group>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default WelcomeAdmin;