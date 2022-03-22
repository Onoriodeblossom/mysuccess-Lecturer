import React from "react";
import styled from "styled-components";

export const Card = ({ background, name, Amount, icon, label }) => {
  return (
    <CardContainer background={background}>
      <div className="title">

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
  width: 40%;
  margin: 20px;
  color: white;
  padding: 0px 20px;
  border-radius: 10px;
  /* height: 120px; */

  .title {
    display: flex;
    justify-content: space-between;

    .icon {
      justify-content:center ;
      align-items:center ;
      display:flex ;
    }

    .label {
      font-weight: 600;
      width: max-content;
      height: max-content;
    }
  }
  .amount {
    font-weight: 600;
    font-size: 20px;
  }
`;
