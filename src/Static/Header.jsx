import styled from "styled-components";
import { GiBrain } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/home">
          <LogoLabel>
            <Logo>
              <GiBrain />
            </Logo>
            <Label>Echelon Technology</Label>
          </LogoLabel>
        </Link>
        <input type="serach" placeholder="What do you need?" />
        <Link to="/newpost">
          <button>New Post</button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 50px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 50px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  font-weight: 800;
  color: lightcoral;
  /* background-color: yellow; */
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    height: 35px;
    width: 400px;
    outline: none;
    border: none;
    background-color: #f5f8fc;
    font-family: Montserrat;
    padding-left: 10px;
    border-radius: 10px;
  }

  button {
    margin: 20px 0;
    height: 35px;
    border: none;
    outline: none;
    font-family: Montserrat;
    background-color: lightcoral;
    color: #fff;
    font-weight: 800;
    cursor: pointer;
    transition: all 400ms;
    border-radius: 5px;
  }
`;
