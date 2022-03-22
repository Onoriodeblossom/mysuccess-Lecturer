import React from 'react'
import "./styles.css";
import { IoAddCircleSharp } from "react-icons/io5";
import { CourseCard } from "../../../../components/coursesCard/courseCard";
import Books from "../../../../assets/books.png";
import Person from "../../../../assets/user.jpg"
import { SubscribersCard } from '../../../../components/subscriberCard/subscribersCard';

const Subscriber = () => {

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
    <div className="subscriber-container">
      <p className="header">Subscriber</p>

      <div className="flex">
        <p className="title">Name</p>
        <p className="title">Mat No</p>
        <p className="title">Level</p>
      </div>
      <div className="line-container">
        <div className="line"></div>
      </div>
      <div className='subscriber-list-container'
      >
        {
          Details.map(({name,img,matNo,level})=>(


            <SubscribersCard/>
          ))
        }

      </div>
    </div>
  );
};



export default Subscriber
