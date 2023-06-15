import React from "react";
import styled from "styled-components";

function Cell({ num, Check}) {
  return (
    <Container onClick={() => Check(num)}>
      {num !== 0 ? num : null}
      
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #74ebd5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:5px;
  background-color: #22c1c3;
  font-size: 30px;
`;

export default Cell;
