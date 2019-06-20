import React, { Component } from "react";
import {
  Card,
  Media,
  Button,
  Image,
  Heading
} from "react-bulma-components/full";
import { bold } from "ansi-colors";

class Profile extends Component {
  render() {
    return (
      <Card style={{ width: "50%", margin: "5% auto" }}>
        <Card.Content>
          <Media>
            <Media.Item renderAs="figure" position="left">
              <Image
                renderAs="p"
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
              <bold style={{ fontWeight: "bold" }}>User name: </bold>{" "}
              {localStorage.getItem("username")}
            </Heading>
            <Heading subtitle size={6}>
              <bold style={{ fontWeight: "bold" }}>Email: </bold>{" "}
              {localStorage.getItem("email")}
            </Heading>
            <Heading subtitle size={6}>
              <bold style={{ fontWeight: "bold" }}>Last login: </bold>{" "}
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
