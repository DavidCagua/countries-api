import React, { useEffect } from "react";
import styled from "styled-components";
import Country from "./country";
import { useSelector, useDispatch } from "react-redux";
import ActionList from "./action-list";
import Wrapper from "./wrapper";

const CountryListStyled = styled.div`
  display: grid;
  grid-auto-flow: columns;
  grid-template-columns: repeat(auto-fill, 264px);
  grid-column-gap: 70px;
  grid-row-gap: 2.3em;
  background: var(--background);
  justify-content: center;
  padding: 3em 0;
`;

function CountryList() {
  const dispatch = useDispatch();

  const countryListByName = useSelector((state) => state.countryListByName);

  const countryList = useSelector((state) => {
    if (state.filterByRegion !== "" && countryListByName.length === 0) {
      return state.coutryFilteredByRegion;
    }
    if (countryListByName.length > 0) {
      return countryListByName;
    }
    return state.countryList;
  });

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((list) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,
        });
      })
      .catch(() => {
        console.log("error");
      });
  }, [dispatch]);

  return (
    <Wrapper>
      <ActionList />
      <CountryListStyled>
        {countryList.map(
          ({ name, flag, population, capital, region, numericCode }) => {
            return (
              <Country
                flag={flag}
                name={name}
                key={numericCode}
                population={population}
                region={region}
                capital={capital}
              />
            );
          }
        )}
      </CountryListStyled>
    </Wrapper>
  );
}

export default CountryList;
