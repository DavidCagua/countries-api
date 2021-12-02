import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CountryStyled = styled.div`
  cursor: pointer;
  &:hover .details {
    border: 1px solid var(--black);
    border-top: none;
    border-radius: 0 0 5px 5px;
  }
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  img {
    width: 100%;
    height: 160px;
    border-radius: 5px 5px 0 0;
    vertical-align: top;
  }
  .details {
    padding: 1.5em;
    border: 1px solid transparent;
    border-top: none;
    transition: 0.3s border;
    background: var(--white);
  }
  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 0.8em;
    margin-bottom: 0.5rem;
  }
`;

function Country({ flag, name, population, region, capital }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/country/${name}`);
  }
  return (
    <CountryStyled onClick={handleClick}>
      <img loading="lazy" src={flag} alt="" />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </CountryStyled>
  );
}

export default Country;
