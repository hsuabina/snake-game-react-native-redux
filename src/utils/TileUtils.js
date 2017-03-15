function getNextTile(rows, cols, fromTile, direction) {
  switch(direction) {
    case 'UP':
        return (fromTile > cols)? fromTile - cols: -1
    case 'DOWN':
        return (fromTile + cols) < (rows * cols)? fromTile + cols: -1
    case 'LEFT':
        return (fromTile % cols) > 0? (fromTile - 1): -1
    case 'RIGHT':
        return (fromTile % cols) < (cols - 1)? fromTile + 1: -1
    default:
        return  -1
  }
}

function getUpdatedSnake(oldSnake, nextTile, grow) {
  let newHeadTile = nextTile
  let newTailTile = grow? oldSnake.tailTile: oldSnake.body[oldSnake.tailTile]
  let newBody = { ...oldSnake.body }

  // Add the new body connection (this will always happen)
  newBody[oldSnake.headTile] = nextTile

  // Remove the old tail tile (only if the snake is not growing)
  if (!grow) {
    delete newBody[oldSnake.tailTile]
  }

  let newSnake = {
    size: grow? oldSnake.size + 1: oldSnake.size,
    headTile: newHeadTile,
    tailTile: newTailTile,
    body: newBody,
    direction: oldSnake.direction
  }

  return newSnake
}

function isValidTurn(currentDirection, turnDirection) {

  switch (turnDirection) {
    case 'UP':
      return (currentDirection == 'DOWN')? false: true
    case 'DOWN':
      return (currentDirection == 'UP')? false: true
    case 'LEFT':
      return (currentDirection == 'RIGHT')? false: true
    case 'RIGHT':
      return (currentDirection == 'LEFT')? false: true
    default:
      return false
  }

  return true

}

export { getNextTile, getUpdatedSnake, isValidTurn }
