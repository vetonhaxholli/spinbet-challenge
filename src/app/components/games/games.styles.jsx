import styled from "styled-components";

export const GamesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(25%, auto));

  .game {
    background: #353535;
    padding: 20px 10px;
    margin: 20px;
    cursor: pointer;
    display:flex;
    max-width: 100%;
  }

  .game span {
    padding-right: 10px;
    min-width: 150px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(25%, auto));
  }
`;