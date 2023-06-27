import { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where
} from "firebase/firestore";
import "./Ranking.css";

const Rank = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const queryRef = query(usersCollectionRef, orderBy("time"));

  useEffect(() => {
    const getUsers = async () => {
      try {
        const querySnapshot = await getDocs(queryRef);
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  const showUsers = users.map((value) => (
    <div key={value.id}>
       <Table>
        <tr>
            <td>이름: {value.name}</td>
            <td>시간: {value.time}</td>
        </tr>
       
       </Table>
    </div>
  ));

  return (
    <div className="rankDiv">
      <InnerDiv>
        <Title>
          순위
          <br /><br />
          <text style={{ fontSize: "24px" }}>{showUsers}</text><br/>
          <div style={{display:"flex",verticalAlign:"middle"}}><a href="/"><UnderButton>홈으로<br/>(돌아가서 f5 한번 해주세요!)</UnderButton></a>&nbsp;&nbsp;</div>
          
        </Title>
      </InnerDiv>
    </div>
  );
};

export default Rank;

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
  height: auto;
  padding: 50px;
  display:flex;
  flex-direction:column;
  text-align:center;
  justify-content:center;
  align-items: center;
  background-color: #79cbca;
  border-radius: 40px;
  color: #49a09d;
  font-size: 50px;
  font-weight: bold;
`

const Table = styled.table`
width:500px;
height:60px;
border:1px solid black;
`
const UnderButton = styled.button`
width:250px;
height:100px;
border:0;
border-radius:40px;
background-color:skyblue;
font-size:18px;
`