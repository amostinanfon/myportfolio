import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: calc(100vw - 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 600px) {
    // width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 35px;
  border-radius: 10px;
`;

const List = styled.ul`
  display: flex;
  margin-left:10px;
  padding-left:10px;
  gap: 40px;
  list-style: none;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const ListItem = styled(Link)`
  cursor: pointer;
  text-decoration:none;
  color: purple;
  &:hover,
  &:focus{
      color: blue;
  }
  &:active{
      color: red;
  };
`;


const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.JPG" />
          <List>
            <ListItem to="/">
              Home
            </ListItem>
            <ListItem to="studio/">
              Who
            </ListItem>
            <ListItem to="/works">
              Works
            </ListItem>
            <ListItem to="/contact">
              Contact
            </ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
