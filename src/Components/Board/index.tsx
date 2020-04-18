import React, { CSSProperties } from "react";
import { Container } from "react-bootstrap";

export default function index(props: { children: React.ReactNode }) {
  let styleBoard: CSSProperties = {
    backgroundColor: "green",
    height: "100vh",
    margin: 0,
  };
  return (
    <Container fluid style={styleBoard}>
      {props.children}
    </Container>
  );
}
