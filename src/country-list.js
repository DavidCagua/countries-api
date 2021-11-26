import React from "react";
import styled from "styled-components";
import Country from "./country";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--background);
  padding: 4em 2em;
`;

function countryList() {
  return (
    <CountryListStyled>
      <Country
        flag="https://upload.wikimedia.org/wikipedia/commons/f/f1/Peru_flag_with_coat_of_arms_300.PNG"
        name="Peru"
        population={111}
        region="America"
        capital="lima"
      />
    </CountryListStyled>
  );
}

export default countryList;
