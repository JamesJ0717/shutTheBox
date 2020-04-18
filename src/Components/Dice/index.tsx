import React from "react";
import { Container, Button } from "react-bootstrap";

import one from "./images/one.png";
import two from "./images/two.png";
import three from "./images/three.png";
import four from "./images/four.png";
import five from "./images/five.png";
import six from "./images/six.png";

type Props = {
  dice: number[];
  roll: () => void;
};

export default function index(props: Props) {
  let setImages = () => {
    let image0Src;
    let image1Src;
    switch (props.dice[0]) {
      case 1:
        image0Src = one;
        break;
      case 2:
        image0Src = two;
        break;
      case 3:
        image0Src = three;
        break;
      case 4:
        image0Src = four;
        break;
      case 5:
        image0Src = five;
        break;
      case 6:
        image0Src = six;
        break;

      default:
        break;
    }
    switch (props.dice[1]) {
      case 1:
        image1Src = one;
        break;
      case 2:
        image1Src = two;
        break;
      case 3:
        image1Src = three;
        break;
      case 4:
        image1Src = four;
        break;
      case 5:
        image1Src = five;
        break;
      case 6:
        image1Src = six;
        break;

      default:
        break;
    }
    let image0 = (
      <img src={image0Src} alt="Die One" style={{ width: 175, height: 175 }} />
    );
    let image1 = (
      <img src={image1Src} alt="Die Two" style={{ width: 175, height: 175 }} />
    );

    return (
      <Container style={{ margin: 10 }}>
        {image0}
        {image1}
      </Container>
    );
  };
  console.log(
    props.dice.toString(),
    (props.dice[0] + props.dice[1]).toString()
  );
  return (
    <Container>
      {setImages()}
      <Button
        style={{ width: 150, margin: 10, backgroundColor: "#25abd3" }}
        onClick={() => {
          props.roll();
        }}
      >
        Roll
      </Button>
    </Container>
  );
}
