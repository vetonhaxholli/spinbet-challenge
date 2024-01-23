import styled from "styled-components";
import { getStatusColor } from "../../utils";

export const Container = styled.div`
display: block;
margin: 0 auto;
padding: 20px;
text-align: center;
margin-top: 100px;
min-width: 800px;
h2,
h3 {
  margin-bottom: 10px;
  margin-top: 10px;
}

@media (max-width: 600px) {
  margin-top: 50px;
}
`;

export const ResultWrapper = styled.div`
margin-bottom: 40px;

@media (max-width: 600px) {
  margin-bottom: 10px;
}
`;

export const LeagueInformation = styled.div`
margin-bottom: 40px;
.game-status {
  color: ${({ gamestatus }) => getStatusColor(gamestatus)};
}

@media (max-width: 600px) {
  .game-status {
    font-size: 1rem; /* Further adjust font size for smaller screens */
  }
}
`;

export const OpponentWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 20px;
span {
  min-width: 400px;
}

@media (max-width: 600px) {
  display: block;
  span,
  div {
    min-width: unset;
    font-size: 15px;
  }
}
`;

export const CustomFT = styled.div`
width: 120px;
height: 120px;
border-radius: 100%;
border: 1px solid #fff;
color: #ffffff;
position: relative;
overflow: hidden;

.outer-rounded {
  position: relative;
  width: 120px;
  height: 120px;
}

.circular-progress {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: conic-gradient(
    ${({ colorstatus }) => getStatusColor(colorstatus)} 0% ${({ minutesplayed }) => (minutesplayed / 90) * 100}%,
    transparent 0%
  );
  z-index: 1;
}

.inner-rounded {
  position: absolute;
  content: "";
  width: 96.5%;
  height: 96.5%;
  background-color: #5c5c5c;
  border-radius: 100%;
  top: 1%;
  left: 1%;
  z-index: 1;
  display: flex;
  align-items: center;
  span {
    min-width: 120px;
  }
}

@media (max-width: 600px) {
  font-size: 15px;
  padding: 0px;
  width: 50px;
  height: 50px;
  margin: 10px auto;

  .inner-rounded {
    width: 88%;
    height: 88%;
    border-radius: 100%;
    top: 2%;
    left: 2%;
    span {
      min-width: 47px;
    }
  }

  .outer-rounded {
    width: 52px;
    height: 52px;
    border-radius: 100%;
  }
}
`;