"use client"

import Link from "next/link";
import { GamesContainer } from "./games.styles";

const Games = ({ games }) => (
  <GamesContainer>
    {games &&
      games.map((data) => (
        <span key={data.id}>
          <Link
            href={{
              pathname: `/game/${data?.status?.type}`,
              query: { data: JSON.stringify(data) },
            }}
          >
            <div className={"game"} key={data.id} data-testid="games-component">
              <span>{data?.liveStatus}</span>
              <span>{data?.name}</span>
            </div>
          </Link>
        </span>
      ))}
  </GamesContainer>
);

export default Games;