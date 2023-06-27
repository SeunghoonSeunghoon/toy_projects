import { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import "./Ranking.css";

const Ranking = () => {
  const [newName, setNewName] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const record = localStorage.getItem("record");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const createUsers = async () => {
    if(record <= 20) alert("사기치지마라. 김호현.");
    else{
    await addDoc(usersCollectionRef, { name: newName, time: record });
    alert("등록을 성공했어요!");
    }
  };

  return (
    <div className="rankingDiv">
      <InnerDiv>
        <Title>
          당신의 기록은?
          <br />
          [시간: {record}]
          <br />
          <br />
          <TextDiv>
            닉네임:
            <Input
              type="text"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            />
          </TextDiv>
          <br />
          <div style={{ gap: "10px" }}>
            <Insert onClick={createUsers}>등록하기</Insert>
            <a href = "/"><Insert>돌아가기</Insert></a>
          </div>
        </Title>
      </InnerDiv>
    </div>
  );
};

const InnerDiv = styled.div`
  width: 60%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 50px 0px 0px;
`;

const Title = styled.div`
  width: 600px;
  height: 80vh;
  padding: 50px;
  background-color: #ffd0cd;
  border-radius: 40px;
  color: #ff848f;
  font-size: 50px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 200px;
  height: 50px;
  background-color: white;
  font-size: 30px;
`;

const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Insert = styled.button`
  width: 300px;
  height: 100px;
  border-radius: 40px;
  border: 0;
  color: #ff848f;
  font-size: 40px;
  font-weight: bold;
`;

export default Ranking;
