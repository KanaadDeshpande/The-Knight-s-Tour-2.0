import React from "react";
import {
  HomeContainer,
  HomeTitle,
  HomeInnerContainer,
  HomeButton,
  HomeButtonLink,
} from "./styles/home";
// import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

function Home() {
  return (
    <HomeContainer>
      <HomeTitle>Encrypto</HomeTitle>
      <HomeInnerContainer>
        <HomeButton>
          <HomeButtonLink to={ROUTES.ENCRYPT}>Encrypt</HomeButtonLink>
        </HomeButton>
        <HomeButton>
          <HomeButtonLink to={ROUTES.DECRYPT}>Decrypt</HomeButtonLink>
        </HomeButton>
      </HomeInnerContainer>
    </HomeContainer>
  );
}

export default Home;
