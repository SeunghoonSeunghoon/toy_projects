import React, { useState } from "react";
import styled from "styled-components";
import Board from "./Board";
import Timer from "./Timer";
import "./oneToFifty.css";
import Cat from "./img/happycat-unscreen.gif";
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
    if (num === current && gameFlag === true) {
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
    <div className="gradient-bg">
      <WideMain>
        <Img src={Cat}></Img>

        <Container>
          <Main>
            <MainText>해삐캣과 함께 1부터 50까지!</MainText>
          </Main>
          <Board numbers={numbers} Check={Check} />
          {gameFlag ? (
            <Timer />
          ) : (
            <StartButton onClick={startGame}>
              <ButtonText>시작하기!!</ButtonText>
            </StartButton>
          )}
        </Container>
        <Img src={Cat}></Img>
      </WideMain>
    </div>
  );
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const WideMain = styled.div`
display:flex;
gap:30px;`

const Container = styled.div`
  width: 600px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 120px;
  gap:10px;
`;
const MainText = styled.h1`
  text-align: left;
  font-size: 35px;
  margin-bottom: 30px;
`;
const StartButton = styled.div`
  background-color: #c9d6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 300px;
  height: 70px;
  border-radius: 10px;
`;
const ButtonText = styled.div`
  font-size: 25px;
`;
const Main = styled.div`
  width: 500px;
  height: 80px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
`;
export default OneToFifty;
