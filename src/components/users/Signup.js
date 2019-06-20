import React, { Component } from "react";
import Card from "react-bulma-components/lib/components/card";
import Button from "react-bulma-components/lib/components/button";
import {
  Field,
  Control,
  Input,
  Help,
  Label
} from "react-bulma-components/lib/components/form";
import api from "../../helpers/api";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    };

  }

  handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    if (
      this.state.username === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.passwordConfirmation === ""
    ) {
      alert("Provide all needed information");
    } else {
      api.createUser(this.state).then(resp => {
        console.log(resp.data);
        if (resp.data.status === "ok") {
          this.props.history.push("/login");
        }
      });
    }
  }

  render() {
    let { username, email, password, passwordConfirmation } = this.state;
    return (
      <Card style={{ width: "50%", margin: "5% auto" }}>
        <Card.Header>
          <Card.Header.Title>Sign up</Card.Header.Title>
        </Card.Header>
        <Card.Content>
          <form onSubmit={this.handleSubmit}>
            <Field>
              <Label>User name</Label>
              <Control>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="username"
                  placeholder="New user name"
                  value={username}
                />
                <Help color="info">Lower case and max 12 characters</Help>
              </Control>
            </Field>
            <Field>
              <Label>Email</Label>
              <Control>
                <Input
                  onChange={this.handleChange}
                  type="text"
                  name="email"
                  placeholder="user@example.com"
                  value={email}
                />
                <Help color="info">A valid e-mail address</Help>
              </Control>
            </Field>
            <Field>
              <Label>Password</Label>
              <Control>
                <Input
                  color={
                    password !== "" && password === passwordConfirmation
                      ? "success"
                      : ""
                  }
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                />
                <Help color="info">Max 12 characters</Help>
              </Control>
            </Field>
            <Field>
              <Label>Password confirmation</Label>
              <Control>
                <Input
                  color={
                    passwordConfirmation !== "" &&
                    password === passwordConfirmation
                      ? "success"
                      : ""
                  }
                  onChange={this.handleChange}
                  name="passwordConfirmation"
                  type="password"
                  placeholder="Password"
                  value={passwordConfirmation}
                />
                <Help color="info">
                  Re-type the same password for validation
                </Help>
              </Control>
            </Field>
            <Field kind="group">
              <Control>
                <Button type="primary" submit={true}>
                  Submit
                </Button>
              </Control>
              <Control>
                <Button color="link">Cancel</Button>
              </Control>
            </Field>
          </form>
        </Card.Content>
      </Card>
    );
  }
}

export default Signup;
