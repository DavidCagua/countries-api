import React, { useEffect } from "react";
import styled from "styled-components";
import Country from "./country";
import { useSelector, useDispatch } from "react-redux";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--background);
  padding: 4em 2em;
`;

function CountryList() {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.countryList);
  // const [countryList, setCountryList] = useState([]);
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
  }, []);
  return (
    <CountryListStyled>
      {countryList.map(
        ({ name, capital, population, region, flag, numericCode }) => {
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
  );
}

export default CountryList;
