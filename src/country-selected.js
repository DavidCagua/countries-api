import React from "react";
import styled from "styled-components";

const CountrySelectedStyled = styled.div`
  margin-top: 3em;
  padding-bottom: 3em;
  img {
    width: 100%;
    margin-bottom: 2em;
  }
  .grid {
    display: grid;
    grid-row-gap: 1em;
  }
  .border-item {
    padding: 0.5em 2em;
    border-radius: 5px;
    margin-right: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    display: inline-flex;
    margin-bottom: 15px;
    background: var(--white);
    cursor: pointer;
  }
  .grid span {
    &:after {
      content: ", ";
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;
    margin-top: 5em;
    .grid {
      grid-template-columns: 1fr 1fr;
    }
    .borders {
      display: inline-flex;
      margin-right: 1em;
      margin-top: 4em;
    }
  }
`;

function CountrySelected({
  flags,
  name,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
  borders,
}) {
  return (
    <CountrySelectedStyled>
      <img src={flags.png} />
      <div>
        <h2>{name.common}</h2>
        <div className="grid">
          <div>
            <p>
              <strong>Native Name: </strong>
              {Object.keys(name.nativeName).map((key) => {
                return <span>{name.nativeName[key].official}</span>;
              })}
            </p>
            <p>
              <strong>Population: </strong>
              {population}
            </p>
            <p>
              <strong>Region: </strong>
              {region}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {subregion}
            </p>
            <p>
              <strong>Capital: </strong>
              {capital}
            </p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain: </strong>
              {tld}
            </p>
            <p>
              <strong>Currencies: </strong>

              {Object.keys(currencies).map((key) => {
                return (
                  <span>{`${currencies[key].name} (${currencies[key].symbol})`}</span>
                );
              })}
            </p>
            <p>
              <strong>Languages: </strong>
              {Object.keys(languages).map((key) => {
                return <span>{languages[key]}</span>;
              })}
            </p>
          </div>
        </div>
        <p className="borders">
          <strong>Border Countries: </strong>
        </p>
        {borders
          ? borders.map((item) => {
              return <span className="border-item">{item}</span>;
            })
          : "None"}
      </div>
    </CountrySelectedStyled>
  );
}

export default CountrySelected;
