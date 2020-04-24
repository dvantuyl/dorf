import { IGameDef } from '@library';

const splendorfGameDef: IGameDef = {
  id: 'splendorf',
  name: 'Splendorf',
  minPlayers: 2,
  maxPlayers: 4,
  config: () => import('./config'),
};

export default splendorfGameDef;
