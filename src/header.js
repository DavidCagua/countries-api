import React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";

const HeaderStyled = styled.div`
  background: white;
  margin-bottom: 1em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  .content {
    height: 80px;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  h1 {
    font-size: 14px;
  }
  .dark-mode {
    .moon {
      transform: rotate(-25deg);
      margin-right: 10px;
      display: inline-flex;
    }
    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
`;

function Header() {
  function handleClick() {}
  return (
    <HeaderStyled>
      <Wrapper>
        <div class="content">
          <h1>Where in the world?</h1>
          <div className="dark-mode">
            <p onClick={handleClick}>
              <span className="moon">
                <i className="far fa-moon"></i>
                {/* <i className="fas fa-moon"></i> */}
              </span>
              Dark Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
