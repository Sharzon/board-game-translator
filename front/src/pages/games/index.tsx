import { gameModel } from '@/entities/game'
import GameRow from './ui/game-row'

function Games() {
  const rows = gameModel.selectors
    .useGames()
    .map((game) => <GameRow key={game.id} game={game} />)

  return <div>{rows}</div>
}

export default Games
