import React from "react";
import styled from "styled-components";

export const Card = ({ background, name, Amount, icon, label }) => {
  return (
    <CardContainer background={background}>
      <div className="flex">
        <div className="icon">{icon}</div>
        <div className="label">{label}</div>
      </div>
      <div>{name}</div>
      <div className="amount">{Amount} NGN</div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: ${(props) =>
    props.background ? props.background : "#0866C6"};
  width: 42%;
  margin: 20px;
  color: white;
  padding: 20px 10px;
  border-radius: 10px;
  height: auto;

  .flex {
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    .label {
      font-weight: 600;
    }
  }
  .amount {
    font-weight: 600;
    font-size: 20px;
  }
`;
