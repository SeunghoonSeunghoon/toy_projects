import React, { useState } from "react";
import styled from "styled-components";
import Board from "./Board";
import Timer from "./Timer";
let array = [];
for (let i = 1; i <= 25; i++) {
  array.push(i);
}
function OneToFifty() {
  let [numbers, setNumbers] = useState(array);
  let [gameFlag, setGameFlag] = useState(false);
  let [current, setCurrent] = useState(1);
  let [timeElapsed, setTimeElapsed] = useState(0);
  const Check = (num) => {
    if (num === current) {
      Click(num);
    }
  };
  const Click = (num) => {
    if (num === current) {
      if (num === 50) {
        endGame();
        
      }
    }
    const index = numbers.indexOf(num);
    setNumbers((numbers) => [
      ...numbers.slice(0, index),
      num < 26 ? num + 25 : 0,
      ...numbers.slice(index + 1),
    ]);
    setCurrent((current) => current + 1);
  };
  const startGame = () => {
    setNumbers(shuffle(array));
    setCurrent = 1;
    setGameFlag(true);
    
  };
  const endGame = () => {
    setGameFlag(false);
  };
  return (
    <Container>
      <Board numbers={numbers}Check={Check} />
      {gameFlag ? (
        <Timer />
      ) : (
        <StartButton onClick={startGame}>start</StartButton>
      )}
    </Container>
  );
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Container = styled.div`
  width: 600px;
  height: 700px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StartButton = styled.div`
  background-color: skyblue;
  align-items: bottom;
  text-align: center;
  margin-top: 30px;
  width: 100px;
  height: 50px;
`;
export default OneToFifty;
