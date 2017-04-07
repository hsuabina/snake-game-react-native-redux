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

  //debugger

  let newSnake = {
    size: grow? oldSnake.size + 1: oldSnake.size,
    headTile: newHeadTile,
    tailTile: newTailTile,
    body: newBody,
    direction: oldSnake.nextDirection == null? oldSnake.direction: oldSnake.nextDirection,
    nextDirection: null
  }

  return newSnake
}

function isValidTurn(currentDirection, turnDirection) {
  switch (turnDirection) {
    case 'UP':
    case 'DOWN':
      return (currentDirection == 'UP' || currentDirection == 'DOWN')? false: true
    case 'LEFT':
    case 'RIGHT':
      return (currentDirection == 'LEFT' || currentDirection == 'RIGHT')? false: true
    default:
      return false
  }
}

export { getNextTile, getUpdatedSnake, isValidTurn }
