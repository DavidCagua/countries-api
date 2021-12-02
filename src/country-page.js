import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

const CountryPageStyled = styled.div``;

function CountryPage(props) {
  const { state } = useLocation();
  return <CountryPageStyled>countrypage</CountryPageStyled>;
}

export default CountryPage;
