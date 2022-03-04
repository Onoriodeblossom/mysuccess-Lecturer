import styled from "styled-components";

export const Container = styled.div`
  /* background-color: red; */
  height: 100vh;
  display: flex;
  padding:10px;

  /* justify-content:space-evenly; */

  .container1 {
    width:48%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 300px;
    /* background-color:black; */
  }

  .container2 {
    width: 48%;
    border-radius:10px;
    padding: 20px;
    /* background-color:green; */
    border: 1px solid #C5C5C5 ;


    .transaction-history-text{
        color:black;
        font-weight:600;
        padding-bottom:20px
    }
  }
`;
