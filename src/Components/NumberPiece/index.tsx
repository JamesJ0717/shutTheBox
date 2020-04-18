import React, { CSSProperties, useState } from "react";
import { Card, Col } from "react-bootstrap";

type Props = {
  number: Number;
  clickable: boolean;
  player: string;
};

export default function NumberPiece(props: Props) {
  const [color, setcolor] = useState("white");
  let styleCard: CSSProperties = {
    border: 2,
    borderColor: "#707375",
    borderStyle: "solid",
    padding: 1,
    height: 200,
    alignContent: "center",
    backgroundColor: color,
  };

  return (
    <Col style={{ padding: 2 }}>
      <Card
        style={styleCard}
        onClick={() => {
          setcolor(props.player);
        }}
      >
        <Card.Title as="h1">{props.number}</Card.Title>
      </Card>
    </Col>
  );
}
