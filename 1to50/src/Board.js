import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

function Board({ numbers, Check }) {
  return (
    <Container>
      {numbers.map((num, index) => (
        <Cell num={num} key={index} Check={Check}></Cell>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid blue;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

export default Board;
