import React from "react";
import { Link } from "react-router-dom";
import Hero from "react-bulma-components/lib/components/hero";
import Heading from "react-bulma-components/lib/components/heading";
import Button from "react-bulma-components/lib/components/button";
import Container from "react-bulma-components/lib/components/container";
import Signup from "../users/Signup";

function Landing(props) {
  return (
    <Hero color="primary" size="fullheight">
      <Hero.Body>
        <Container>
          <Heading>Grolist</Heading>
          <Heading subtitle size={3}>
            Start sharing your lists
          </Heading>
          <Button>
            <Link to={Signup}>Sign up!</Link>
          </Button>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

export default Landing;
