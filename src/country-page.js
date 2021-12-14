import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CountrySelected from "./country-selected";
import Wrapper from "./wrapper";

const CountryPageStyled = styled.div`
  .back {
    background: var(--white);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 0.5em 2.2em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 3em;
    color: var(--black);
    i {
      margin-right: 5px;
    }
  }
  @media screen and (min-width: 1024px) {
    .back {
      margin-top: 3em;
    }
  }
`;

function CountryPage() {
  let navigate = useNavigate();
  const params = useParams();
  const [country, setCountry] = useState();

  useEffect(() => {
    let mounted = true;
    fetch(`https://restcountries.com/v3.1/alpha/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        if (mounted) {
          setCountry(data[0]);
        }
      });
    return () => (mounted = false);
  }, [params.id]);
  function handleClick() {
    navigate(-1);
  }
  return (
    <CountryPageStyled>
      <Wrapper>
        <button className="back" onClick={handleClick}>
          <i className="fas fa-long-arrow-alt-left"></i>Back
        </button>
        {country ? <CountrySelected {...country} /> : <p>Cargando...</p>}
      </Wrapper>
    </CountryPageStyled>
  );
}

export default CountryPage;
