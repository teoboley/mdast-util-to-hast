// UNIST

export interface Node {
  type: string;
  data?: Data;
  position?: Position;
}

export interface Data { }

export interface Position {
  start: Point;
  end: Point;
  indent?: number;
}

export interface Point {
  line: number;
  column: number;
  offset: number;
}

export interface Parent<T extends Node = Node> extends Node {
  children: T[];
}

export interface Text extends Node {
  value: string;
}