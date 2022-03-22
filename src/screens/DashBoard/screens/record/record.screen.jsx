import React from 'react'
import { RecordCard } from '../../../../components/recoredCard/recordCard';
import "./styles.css"
import Person from "../../../../assets/user.jpg";

const Record =()=>{



  const Details = [
    {
      img: Person,
      name: "Onoriode Klaus",
      matNo: "12344",
      level: "200",
    },
    {
      img: Person,
      name: "Onoriode Klaus",
      matNo: "12344",
      level: "200",
    },
    {
      img: Person,
      name: "Onoriode Klaus",
      matNo: "12344",
      level: "200",
    },
    {
      img: Person,
      name: "Onoriode Klaus",
      matNo: "12344",
      level: "200",
    },
    {
      img: Person,
      name: "Onoriode Klaus",
      matNo: "12344",
      level: "200",
    },
    {
      img: Person,
      name: "Onoriode Klaus",
      matNo: "12344",
      level: "200",
    },
    {
      img: Person,
      name: "Onoriode Klaus",
      matNo: "12344",
      level: "200",
    },
  ];

  return (
    <div className="record-container">
      <div className="">subscriber</div>
      <div className="flex-record">
        <p className="text">Name</p>
        <p className="text">Mat No</p>
        <p className="text">Course</p>
        <p className="text">Level</p>
        <p className="text">Price</p>
        <p className="text">Time</p>
      </div>

      <div className="line-container">
        <div className="line"></div>
      </div>
      <div className="subscriber-list-container">
        {Details.map(({ name, img, matNo, level }) => (
          <RecordCard />
        ))}
      </div>
    </div>
  );
}
export default Record