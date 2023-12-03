import { Game, Round } from "../game.ts";

export const parseGame = (gameString: string): Game => {
  const [gameAsString, roundsAsString] = gameString.split(":");

  return ({
    id: readGame(gameAsString),
    rounds: readRounds(roundsAsString),
  });
};

const readGame = (game: string) => {
  const [, gameId] = game.split(" ");
  return Number(gameId);
};

const readRounds = (rounds: string): Round[] =>
  rounds.split(";").map(readRound);

const readRound = (round: string): Round =>
  round.trim().split(",").map(readCubes).reduce(mergeCubes);

const mergeCubes = (acc: Round, next: Round): Round => Object.assign(acc, next);

const readCubes = (round: string): Round => {
  const [cubesNumber, cubeType] = round.trim().split(" ");
  return { [cubeType]: Number(cubesNumber) };
};
