import React, { CSSProperties, Component } from "react";
import { Row, Button } from "react-bootstrap";

import "./App.css";

import Header from "./Components/Header";
import Board from "./Components/Board";
import Dice from "./Components/Dice";
import NumberPiece from "./Components/NumberPiece";

type Props = {};
type State = { dice: number[]; sum: number; player: string };

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      dice: [6, 6],
      sum: 0,
      player: "black",
    };
  }

  roll = () => {
    let nums = [0, 0];
    for (let i = 0; i < 2; i++) {
      nums[i] = Math.ceil(Math.random() * 6);
    }
    let sum = nums[0] + nums[1];
    this.setState({ dice: nums, sum: sum });
  };

  whoseTurn = (player: string) => {
    return this.setState({ player: player });
  };

  render() {
    let styleRow: CSSProperties = {
      marginRight: 10,
      marginLeft: 10,
    };
    let makePieces = () => {
      let numArray: JSX.Element[] = [];
      let clickable: boolean = false;
      for (let i = 1; i <= 12; i++) {
        // console.log(i, this.state.dice);
        if (
          this.state.dice[0] === i ||
          this.state.dice[1] === i ||
          this.state.sum === i
        ) {
          clickable = true;
        } else {
          clickable = false;
        }
        numArray.push(
          <NumberPiece
            number={i}
            key={i.toString()}
            player={this.state.player}
            clickable={clickable}
          />
        );
      }
      return numArray;
    };
    return (
      <div className="App">
        <Header player={this.state.player} />
        <Board>
          <Row md={12} style={styleRow}>
            {makePieces()}
          </Row>
          <Dice dice={this.state.dice} roll={this.roll} />
          <Button
            style={{
              width: 150,
              margin: 10,
              backgroundColor: "#ffca28",
              color: "#2e3348",
            }}
            onClick={() => {
              this.whoseTurn(this.state.player === "white" ? "black" : "white");
              this.roll();
            }}
          >
            Swap Turn
          </Button>
        </Board>
      </div>
    );
  }
}
