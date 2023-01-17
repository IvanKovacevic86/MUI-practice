import React from "react";
import ButtonAppBar from "./appbar";
import { Container } from "@mui/material";
import MediaCard from "./card";

const OpenButton = (props) => {
  return (
    <div>
      <Container>
        <ButtonAppBar />
        <MediaCard learn={props.clicked} />
      </Container>
    </div>
  );
};

export default OpenButton;
