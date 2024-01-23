import styled from "styled-components";

export const NavigationContainer = styled.div`
  background: #fff;
  display: block;
  min-width: 250px;
  padding: 10px;

  h2 {
    color: #000;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 250px;

  a {
    display: flex;
    text-align: center;
    justify-content: space-between;
    padding: 15px 10px;
    text-decoration: none;
    text-align: left;
    color: #000;
    border: 1px solid #5c5c5c;
    border-top: none; /* Remove top border */

    @media (max-width: 600px) {
      border-top: 1px solid #5c5c5c; /* Add top border for each link on mobile */
      justify-content: center;
    }
  }

  a:first-child {
    border-top: 1px solid #5c5c5c;
  }

  span:last-child {
    background: #000;
    padding: 0px 15px;
    color: #fff;
  }

  @media (max-width: 600px) {
    a {
      display: flex;
      justify-content: space-between;
    }
  }
`;
