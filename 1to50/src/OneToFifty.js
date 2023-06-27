import React, { useState, useEffect, useId } from "react";
import styled from "styled-components";
import Board from "./Board";
import Timer from "./Timer";
import "./oneToFifty.css";
import Cat from "./img/happycat-unscreen.gif";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
let array = [];
for (let i = 1; i <= 25; i++) {
  array.push(i);
}
function OneToFifty() {
  const [users, setUsers] = useState([]);
  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(db, "users");

  const uniqueId = useId();
  console.log(uniqueId);

  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getUsers = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(usersCollectionRef);
      // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  const showUsers = users.map((value) => (
    <div key={uniqueId}>
      <h1>Name: {value.name}</h1>
      <h1>time: {value.time}</h1>
    </div>
  ));
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
      if (num === 1) {
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
            <ButtonDiv>
              <StartButton onClick={startGame}>
                <ButtonText>시작하기!!</ButtonText>
              </StartButton>
              <a
                href="/ranking"
                style={{ textDecoration: "none", color: "black" }}
              >
                <StartButton>
                  <ButtonText>등록하기!!</ButtonText>
                </StartButton>
              </a>
              <StartButton>
                <a
                  href="/rank"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ButtonText>랭킹가기!!</ButtonText>
                </a>
              </StartButton>
            </ButtonDiv>
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
  display: flex;
  gap: 30px;
`;

const Container = styled.div`
  width: 600px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 120px;
  gap: 10px;
`;

const MainText = styled.h1`
  text-align: left;
  font-size: 35px;
  margin: auto;
`;
const StartButton = styled.div`
  background-color: #c9d6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 200px;
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
  vertical-align: middle;
  border-radius: 35px;
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
`;

const ButtonDiv = styled.div`
  width: 700px;
  height: 100px;
  display: flex;
  justify-content: center;
  gap: 50px;
`;
export default OneToFifty;
