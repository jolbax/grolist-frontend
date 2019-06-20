import React, { Component } from "react";
import Card from "react-bulma-components/lib/components/card";
import Button from "react-bulma-components/lib/components/button";
import {
  Field,
  Control,
  Input,
  Label,
  Help
} from "react-bulma-components/lib/components/form";
import api from "../../helpers/api";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    if (this.state.name === "" || this.state.password === "") {
      alert("Provide valid credentials");
    } else {
      api.userLogin(this.state).then(resp => {
        console.log(resp.data);

        if (resp.data.auth === true) {
          localStorage.setItem("token", resp.data.token);
          localStorage.setItem("auth", resp.data.auth);
          localStorage.setItem("username", resp.data.user.username);
          localStorage.setItem("email", resp.data.user.email);
          window.location.href = "/";
        }
      });
    }
  }

  render() {
    let { email, password } = this.state;
    return (
      <Card style={{ width: "50%", margin: "5% auto" }}>
        <Card.Header>
          <Card.Header.Title>Login</Card.Header.Title>
        </Card.Header>
        <Card.Content>
          <form onSubmit={this.handleSubmit}>
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
              </Control>
            </Field>
            <Field>
              <Label>Password</Label>
              <Control>
                <Input
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                />
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

export default Login;
