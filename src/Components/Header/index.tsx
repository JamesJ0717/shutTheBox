import React from "react";

type Props = {
  player: string;
};

export default function index(props: Props) {
  return (
    <header
      style={{
        // textAlign: "left",
        padding: 10,
        backgroundColor: "#25ABD3",
      }}
    >
      <span>Player: {props.player} </span>
    </header>
  );
}
