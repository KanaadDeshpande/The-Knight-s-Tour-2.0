import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const HomeContainer = styled.div`
  height: 100vh;
  background-color: #2d132c;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeTitle = styled.h1`
  font-size: 72px;
`;

export const HomeInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 25%;
  padding-top: 5px;
`;

export const HomeButton = styled.button`
  border: 0;
  border-radius: 3px;
`;

export const HomeButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #f40612;
  }
`;
