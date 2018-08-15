// UNIST

interface Node {
  type: string;
  data?: Data;
  position?: Position;
}

interface Data { }

interface Position {
  start: Point;
  end: Point;
  indent?: number;
}

interface Point {
  line: number;
  column: number;
  offset: number;
}

interface Parent<T extends Node = Node> extends Node {
  children: T[];
}

interface Text extends Node {
  value: string;
}