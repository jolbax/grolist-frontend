import React from "react";
import { Link } from "react-router-dom";
import Hero from "react-bulma-components/lib/components/hero";
import Heading from "react-bulma-components/lib/components/heading";
import Button from "react-bulma-components/lib/components/button";
import Section from "react-bulma-components/lib/components/section";
import Container from "react-bulma-components/lib/components/container";

function Landing(props) {
  return (
    <Hero color="primary" size="fullheight">
      <Hero.Body>
        <Container>
          <Heading>Grolist</Heading>
          <Heading subtitle size={3}>
            Start sharing your lists
          </Heading>
          { localStorage.getItem("token") ?
          (<Button>
            <Link to={"/lists"}>Create a new list!</Link>
          </Button>) :
          <Section kind="group">
            <Button>
              <Link to={"/signup"}>Sign up</Link>
            </Button>
            <Button style={{ marginLeft: "5px"}}>
              <Link to={"/login"}>Log in</Link>
            </Button>
          </Section>
            }
        </Container>
      </Hero.Body>
    </Hero>
  );
}

export default Landing;
