import React from 'react'
import Person from "../../assets/user.jpg"
import "./styles.css"

export const SubscribersCard=()=>{
  return (
    <div className="subscriber-card-container">
      <div className="img-name">
        <img className="image" src={Person} />
        <div className="name">Primcewill Emeka</div>
      </div>
      <div className="matNo">12345678</div>

      <div className="level">
        <div className="level-text">
            200
            
            </div>
      </div>
    </div>
  );
}
