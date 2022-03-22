import React from "react";
import Person from "../../assets/user.jpg";
import "./styles.css";

export const RecordCard = () => {



  return (
    <div className="subscriber-card-container">
      <div className="img-name-record">
        <img className="image" src={Person} />
        <div className="name">Primcewill Emeka</div>
      </div>
      <div className="mat-no">12345678</div>

      <div className="course">Exploring Arduino</div>


      <div className="level-record">
        <div className="level-text">200</div>
      </div>

      <div className="price">1,000NGN</div>

      <div className="time">10:15AM</div>
    </div>
  );
};
