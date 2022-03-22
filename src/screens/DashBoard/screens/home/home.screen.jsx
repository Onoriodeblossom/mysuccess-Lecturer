import React from 'react'
import { Card } from '../../../../components/Card/card..component';
import { Container } from './styles';
import {MdOutlinePeopleAlt} from "react-icons/md"
import Book from "../../../../assets/books.png"
import { TransactionHistoryCard } from '../../../../components/TransactionHistoryCard/transactionHistoryCard.component';

 const Home=()=>{
   const card =[
     {
      label:"Withdraw",
       name:"Wallet",
       icon:<MdOutlinePeopleAlt size={24} color="white"/>,
       number:"50,000 ",
       color:"#0866C6"
     },
     {
      label:"View All",
      number:"10",
      name:"Subscribers",
      icon:<MdOutlinePeopleAlt size={24} color="white"/>,
      color:"#23BF08"
    },
    {
      label:"Add New",
      name:"MyCourses",
      number:"2",
      icon:<MdOutlinePeopleAlt size={24} color="white"/>,
      color:"#363D4F"
    },
   ]
   const transactionHistory = [
     {
       img: Book,
       purchaserName: "Primcewill Emeka   ",
       BookName: "Practical Electronics",
       date: "10/03/2021",
       amount: "5000",
       status: "#C5C5C5",
     },
     {
       img: Book,
       purchaserName: "Primcewill Emeka   ",
       BookName: "Practical Electronics",
       date: "10/03/2021",
       amount: "5000",
       status: "#C5C5C5",
     },
     {
       img: Book,
       purchaserName: "Primcewill Emeka   ",
       BookName: "Practical Electronics",
       date: "10/03/2021",
       amount: "5000",
       status: "#C5C5C5",
     },
     {
       img: Book,
       purchaserName: "Primcewill Emeka   ",
       BookName: "Practical Electronics",
       date: "10/03/2021",
       amount: "5000",
       status: "#C5C5C5",
     },
     {
       img: Book,
       purchaserName: "Primcewill Emeka   ",
       BookName: "Practical Electronics",
       date: "10/03/2021",
       amount: "5000",
       status: "#C5C5C5",
     },
     {
       img: Book,
       purchaserName: "Primcewill Emeka   ",
       BookName: "Practical Electronics",
       date: "10/03/2021",
       amount: "5000",
       status: "#C5C5C5",
     },
     {
       img: Book,
       purchaserName: "Primcewill Emeka   ",
       BookName: "Practical Electronics",
       date: "10/03/2021",
       status: "Past Question",
       amount: "5000",
     },
     {
       img: Book,
       purchaserName: "Primcewill Emeka   ",
       BookName: "Practical Electronics",
       date: "10/03/2021",
       status: "#C5C5C5",
       amount: "5000",
     },
     {
       img: Book,
       purchaserName: "Primcewill Emeka   ",
       BookName: "Practical Electronics",
       date: "10/03/2021",
       amount: "5000",
       status: "Past Question",
     },
   ];
  return (
    <Container>
      <div className="container1">
        {card.map(({ name, color, icon, number, label }) => (
          <Card
            background={color}
            icon={icon}
            label={label}
            name={name}
            Amount={number}
          />
        ))}
      </div>
      <div className="container2 transaction-Histiory-container">
        <div className="transaction-history-text"> Transaction History</div>
        {transactionHistory.map(
          ({ img, purchaserName, BookName, date, amount,status }) => (
            <TransactionHistoryCard
              img={img}
              purchaserName={purchaserName}
              BookName={BookName}
              date={date}
              status={status}
              amount={amount}
            />
          )
        )}
      </div>
    </Container>
  );
}
export default Home;




