import styled from "styled-components";
import bg from "../assets/tech.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [myName, setMyName] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      <Wrapper>
        <h1>Welcome to Echelon Technology</h1>
        {toggle ? null : (
          <InputDiv>
            <label>Please Enter Your Name</label>
            <input
              type="search"
              placeholder="Enter Your Name"
              value={myName}
              onChange={(e) => {
                setMyName(e.target.value);
              }}
            />
            <button onClick={handleClick}>Submit</button>
          </InputDiv>
        )}

        {toggle ? (
          <previewDiv>
            <h2>Hi {myName}</h2>
            <button
              style={{ backgroundColor: "#703717" }}
              onClick={handleClick}
            >
              Go Back
            </button>
            <Link to="/home">
              <button style={{ backgroundColor: "#703717" }}>
                Continue to Home Page
              </button>
            </Link>
          </previewDiv>
        ) : null}
      </Wrapper>
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  background-color: red;
  min-height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  color: #fff;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    /* margin: 0px; */
    font-weight: 900;
    text-align: center;
    color: #fff;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: 700;
  }
  input {
    height: 40px;
    width: 350px;
    outline: none;
    border: none;
    font-family: Montserrat;
    padding-left: 10px;
    font-weight: 600;

    @media (max-width: 350px) {
      width: 300px;
    }
  }

  button {
    margin: 20px 0;
    height: 35px;
    border: none;
    outline: none;
    font-family: Montserrat;
    background-color: #003f49;
    color: #fff;
    font-weight: 800;
    cursor: pointer;
    transition: all 400ms;

    &:hover {
      transform: scale(0.97);
      transition: all 400ms;
    }
  }
`;
const previewDiv = styled.div`
  text-align: center;
  h2 {
    color: #003f49;
    font-weight: 800;
    font-size: 35px;
    margin: 0px;
  }

  button {
    margin: 10px 20px;
    height: 40px;
    border: none;
    outline: none;
    font-family: Montserrat;
    background-color: #003f49;
    color: #fff;
    font-weight: 800;
    cursor: pointer;
    transition: all 400ms;

    &:hover {
      transform: scale(0.97);
      transition: all 400ms;
    }
  }
`;
