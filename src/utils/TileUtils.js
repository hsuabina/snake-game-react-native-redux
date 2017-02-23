function getTile(x, y, board) {
  return (x - 1) * board.cols + (y - 1)
}

function getNextTile(fromTile, direction, board) {
  switch(direction) {
    case 'UP':
        return (fromTile > board.cols)? fromTile - board.cols: -1
    case 'DOWN':
        return (fromTile + board.cols) < (board.rows * board.cols)? fromTile + board.cols: -1
    case 'LEFT':
        return (fromTile % board.cols) > 0? (fromTile - 1): -1
    case 'RIGHT':
        return (fromTile % board.cols) < (board.cols - 1)? fromTile + 1: -1
    default:
        return  -1
  }
}

function moveSnake(oldSnake, nextTile, grow) {
  let newHeadPosition = nextTile
  let newTailPosition = grow? oldSnake.tailPosition: oldSnake.body[oldSnake.tailPosition]
  let newBody = { ...oldSnake.body }

  // Add the new body connection (this will always happen)
  newBody[oldSnake.headPosition] = nextTile

  // Remove the old tail tile (only if the snake is not growing)
  if (!grow) {
    delete newBody[oldSnake.tailPosition]
  }

  let newSnake = {
    size: grow? oldSnake.size + 1: oldSnake.size,
    headPosition: newHeadPosition,
    tailPosition: newTailPosition,
    body: newBody
  }

  return newSnake
}

export { getNextTile, moveSnake }
