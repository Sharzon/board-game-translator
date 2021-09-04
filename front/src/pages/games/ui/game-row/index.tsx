import type { Game } from '@/shared/api'

export type GameRowProps = {
  game: Game
}

function GameRow({ game }: GameRowProps) {
  return <div>{game.name}</div>
}

export default GameRow
