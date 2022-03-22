import React from "react";
import Book from "../../assets/books.png";
import "./styles.css";
import {MdOutlineEdit} from "react-icons/md"
import { AiOutlineDelete } from "react-icons/ai";

export const CourseCard = ({ name, courseCode, date }) => {
  return (
    <div className="courseCardContainer">
      <img src={Book} />
      <div className="container-wrapper">
        <div className="name">{name}Exploring Arduino</div>
        <div className="course-code">{courseCode}PHY102</div>
        <div>
          <div className="last-update">
            <div>last update</div>
            <div className="date">15 jan 2021 {date}</div>
          </div>
        </div>
        <div className="edit-wrapper">
          <div className="edit"> <MdOutlineEdit/> Edit</div>

          <div className="delete"><AiOutlineDelete/>Delete</div>
        </div>
      </div>
    </div>
  );
};
