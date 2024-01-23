"use client";
import { getFormattedLiveStatus, getStatusString } from "../../utils";
import { Container, LeagueInformation, ResultWrapper, OpponentWrapper, CustomFT} from "./game.styles";

const Game = ({ searchParams }) => {
  const jsonParsedData = searchParams && searchParams.data ? JSON?.parse(searchParams.data) : null;

  if(!jsonParsedData) return null;
  
  const {
    awayScore: { current: awayScoreCurrent },
    awayTeam: { name: awayTeamName },
    competition,
    country,
    homeScore: { current: homeScoreCurrent },
    homeTeam: { name: homeTeamName },
    liveStatus,
    status: { type },
  } = jsonParsedData;

  return searchParams ? (
    <Container>
      <LeagueInformation gamestatus={type}>
        <span>{country}</span>
        <h2>{competition}</h2>
        <span className="game-status">{getStatusString(type)}</span>
      </LeagueInformation>
      <ResultWrapper>
        <h1>{homeScoreCurrent} - {awayScoreCurrent}</h1>
      </ResultWrapper>
      <OpponentWrapper>
        <span>{homeTeamName}</span>
        <CustomFT minutesplayed={getFormattedLiveStatus(liveStatus)} colorstatus={type}>
          <div className="outer-rounded">
            <div className="circular-progress"></div>
            <div className="inner-rounded">
              <span>{liveStatus}</span>
            </div>
          </div>
        </CustomFT>
        <span>{awayTeamName}</span>
      </OpponentWrapper>
    </Container>
  ) : (
    ""
  );
};

export default Game;
