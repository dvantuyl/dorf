import Splendorf from './splendorf';

export const GAMES_LIST: Array<IGameDef> = [
  Splendorf,
  Splendorf,
  Splendorf,
  Splendorf,
  Splendorf,
  Splendorf,
  Splendorf,
  Splendorf,
];

export interface IGameDef {
  id: string;
  name: string;
  minPlayers: number;
  maxPlayers: number;
  config: () => Promise<any>;
}
