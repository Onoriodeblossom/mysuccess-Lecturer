import React from 'react'
import "./styles.css"
import { IoAddCircleSharp } from "react-icons/io5";
import { CourseCard } from '../../../../components/coursesCard/courseCard';
import Books from "../../../../assets/books.png"

const Courses=()=>{

  const course = [
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
    {
      img: Books,
      name: "Exploring Arduino",
      courseCode: "COMP224",
      lastUpdate: "15th jan 2021",
    },
  ];
  return (
    <div className="course-container">
      <div className="flex">
        <div className="course-text">Courses</div>
        <div className="add-course">
          <IoAddCircleSharp color="#50B12F" size={40} />
          <span>Add Course</span>
        </div>
      </div>
      <div className="line-container">
        <div className="line"></div>
      </div>


      <div className='main'>
        {
          course.map(({name,courseCode,lastUpdate,img})=>(

            <CourseCard/>
          ))
        }

      </div>
    </div>
  );
}

export default Courses