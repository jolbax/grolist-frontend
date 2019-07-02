import React, { Component } from "react";
import {
  Card,
  Media,
  Button,
  Image,
  Heading
} from "react-bulma-components/full";

class Profile extends Component {
  render() {
    return (
      <Card style={{ width: "50%", margin: "5% auto" }}>
        <Card.Content>
          <Media>
            <Media.Item position="left">
              <Image
                size={64}
                alt="64x64"
                src="http://bulma.io/images/placeholders/128x128.png"
              />
            </Media.Item>
            <Media.Item>
              <Heading size={4}>{localStorage.getItem("username")}</Heading>
            </Media.Item>
          </Media>
          <Media.Item>
            <Heading subtitle size={6}>
              <span style={{ fontWeight: "span" }}>User name: </span>{" "}
              {localStorage.getItem("username")}
            </Heading>
            <Heading subtitle size={6}>
              <span style={{ fontWeight: "span" }}>Email: </span>{" "}
              {localStorage.getItem("email")}
            </Heading>
            <Heading subtitle size={6}>
              <span style={{ fontWeight: "span" }}>Last login: </span>{" "}
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </Heading>
            <Button color="link">Reset Password</Button>
          </Media.Item>
        </Card.Content>
      </Card>
    );
  }
}

export default Profile;
