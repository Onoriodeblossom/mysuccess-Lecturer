import styled  from "styled-components"  


export const Container = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  /* background-color: black; */
  display: flex;
  justify-content: space-between;
  img {
    height: 120px;
    /* background-color: red; */
  }
  .img {
    width: 20%;
    /* background-color: orange; */
    justify-content: center;
  }
  .book-details {
    width: 60%;
    padding: 10px 10px;
    /* background-color: green; */

    .purchaserName {
      font-size: 16px;
      font-weight: 600;
      color: black;
    }
    span {
      font-weight: 400;
      color:red
    }
    .book-name {
      color: #807e7e;
    }
    .date {
      color: #c5c5c5;
    }
  }
  .amount {
    width: 15%;
    /* background-color: yellow; */
    justify-content: flex-end;

    .amount-text {
      font-size: 18px;
      font-weight: 600;
      padding: 10px 10px;
    }
    .status {
      color: #c5c5c5;
    }
  }
`;