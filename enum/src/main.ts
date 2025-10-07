enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function getDirection(direction: Direction) {
  if (direction === Direction.Up) return "direction UP";
  if (direction === Direction.Down) return "direction DOWN";
  if (direction === Direction.Left) return "direction LEFT";
  if (direction === Direction.Right) return "direction RIGHT";
}

const logger = getDirection(Direction.Up);

enum StatusCode {
  OK = 200,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

function requestHandeler(url: string): StatusCode {
  if (url === "/") return StatusCode.OK;
  return StatusCode.NOT_FOUND;
}

const handler = requestHandeler("/");
console.log(handler);
