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
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export default Cell;
