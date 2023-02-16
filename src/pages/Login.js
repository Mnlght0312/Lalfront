import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const Login = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match!");
    } else {
      // handle form submission here
    }
  };

  const passwordValidationRules = [
    {
      rule: /(?=.\d)/,
      description: "Number included",
    },
    {
      rule: /(?=.[!@#$%^&])/,
      description: "Symbol included",
    },
    {
      rule: /(?=.[A-Z])/,
      description: "Uppercase included",
    },
  ];

  const passwordValidations = passwordValidationRules.map(
    ({ rule, description }) => {
      return (
        <li
          key={description}
          className={rule.test(password) ? "text-success" : "text-danger"}
        >
          {description}
        </li>
      );
    }
  );

  const passwordColor = passwordValidations.every(
    (validation) => validation.props.className === "text-success"
  )
    ? "green"
    : "red";

  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>Login</ModalHeader>
      <Form onSubmit={handleSubmit}>
        <ModalBody style={{ backgroundColor: "white" }}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">
              Password
              <span
                className="ml-2"
                style={{
                  color: passwordColor,
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                {passwordColor === "red" ? "❌" : "✅"}
              </span>
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <ul>{passwordValidations}</ul>
          </FormGroup>

          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              invalid={confirmPassword !== "" && password !== confirmPassword}
            />
            {confirmPassword !== "" && password !== confirmPassword && (
              <small className="text-danger">Password does not match!</small>
            )}
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" type="submit">
            Save Changes
          </Button>{" "}
          <Button color="secondary" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};
export default Login;
