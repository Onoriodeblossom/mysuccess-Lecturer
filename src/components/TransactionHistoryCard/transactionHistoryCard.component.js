import React from "react";
import { Container } from "./styles";

export const TransactionHistoryCard = ({
  img,
  purchaserName,
  BookName,
  date,
  status,
  amount,
}) => {
  return (
    <Container>
      <div className="img">
        <img src={img} />
      </div>
      <div className="book-details">
        <div className="purchaserName">
          {purchaserName}
          <span className="text">purchases your courses</span>
        </div>
        <div className="book-name">{BookName}</div>
        <div className="date">{date}</div>
      </div>
      <div className="amount">
        <div className="amount-text">{amount} NGN</div>
        <div className="status">{status}</div>
      </div>
    </Container>
  );
};
