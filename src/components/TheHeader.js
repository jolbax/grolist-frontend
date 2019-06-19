import React from "react";
import { Box, Heading } from "react-bulma-components/full";

function TheHeader(props) {
  return (
    <Box className="header">
      <Heading size={3}>Grolist</Heading>
      <Heading subtitle size={5}>
        Your real-time collaboration list!
      </Heading>
    </Box>
  );
}

export default TheHeader;
