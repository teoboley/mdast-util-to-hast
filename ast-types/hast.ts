import { Parent, Text, Node } from './unist';

// HAST

export interface Root extends Parent {
  type: "root";
}

export interface Element extends Parent {
  type: "element";
  tagName: string;
  properties: Properties;
  content?: Root;
}

export interface Properties {}

export interface Doctype extends Node {
  type: "doctype";
  name: string;
  public?: string;
  system?: string;
}

export interface Comment extends Text {
  type: "comment";
}

export interface TextNode extends Text {
  type: "text";
}
