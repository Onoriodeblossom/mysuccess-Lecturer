import styled from "styled-components";

export const Container = styled.div`
  /* background-color:red; */
  height: 100vh;
  width: 100%;
  /* margin:-10px; */
  /* padding:10; */

  flex-wrap: nowrap;

  .sectionContainer {
    width: 100%;
    height: 100vh;
    flex-direction: row;
    justify-content: flex-start;
    align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
    display: flex;
    background: ${(props) =>
      props.background ? props.background : "transparent"};
    flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "nowrap")};

    .section1 {
      background: ${(props) =>
        props.background ? props.background : "#50B12F"};
      /* transform:scaleX(1.5); */
      height: 100vh;
      width: 50%;
    }

    .section2 {
      background: ${(props) => (props.background ? props.background : "blue")};
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 50%;




      .text{
            color:#50B12F;
            font-weight:700;
            font-size: 24px;
            text-align: center;

        }
    }
  }

  @media screen and (max-width: 360px) {
    background-color: lightgreen;

    .sectionContainer {
      width: 100%;
      height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      align-items: ${(props) =>
        props.alignItems ? props.alignItems : "center"};
      display: flex;
      background: ${(props) =>
        props.background ? props.background : "transparent"};
      flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "nowrap")};

      .section1 {
        background: ${(props) =>
          props.background ? props.background : "#50B12F"};
        /* transform:scaleX(1.5); */
        border-bottom-right-radius:00px;
        height: 100px;
        width: 100%;
      }

      .section2 {
        background: ${(props) =>
          props.background ? props.background : "white"};

        height: 100vh;
        width: 100%;




      
      }
    }
  }
`;
