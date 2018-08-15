import { Parent, Text, Node } from './unist';

// MDAST

export interface Root extends Parent {
  type: "root";
}

export interface Paragraph extends Parent {
  type: "paragraph";
}

export interface Blockquote extends Parent {
  type: "blockquote";
}

export interface Heading extends Parent {
  type: "heading";
  depth: number;
}

export interface Code extends Text {
  type: "code";
  lang?: string;
  info?: string;
}

export interface InlineCode extends Text {
  type: "inlineCode";
}

export interface YAML extends Text {
  type: "yaml";
}

export interface HTML extends Text {
  type: "html";
}

export interface List extends Parent<ListItem | List> {
  type: "list";
  ordered: true | false;
  start?: number;
  loose?: true | false;
}

export interface ListItem extends Parent {
  type: "listItem";
  loose?: true | false;
  checked?: true | false;
}

export interface Table extends Parent<TableRow> {
  type: "table";
  align: (alignType | null)[];
}

export enum alignType {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center"
}

export interface TableRow extends Parent<TableCell> {
  type: "tableRow";
}

export interface TableCell extends Parent {
  type: "tableCell";
}

export interface ThematicBreak extends Node {
  type: "thematicBreak";
}

export interface Break extends Node {
  type: "break";
}

export interface Emphasis extends Parent {
  type: "emphasis";
}

export interface Strong extends Parent {
  type: "strong";
}

export interface Delete extends Parent {
  type: "delete";
}

export interface Link extends Parent {
  type: "link";
  title?: string;
  url: string;
}

export interface Image extends Node {
  type: "image";
  title?: string;
  alt?: string;
  url: string;
}

export interface Footnote extends Parent {
  type: "footnote";
}

export interface LinkReference extends Parent {
  type: "linkReference";
  identifier: string;
  referenceType: referenceType;
}

export enum referenceType {
  SHORTCUT = "shortcut",
  COLLAPSED = "collapsed",
  FULL = "full"
}

export interface ImageReference extends Node {
  type: "imageReference";
  identifier: string;
  referenceType: referenceType;
  alt?: string;
}

export interface FootnoteReference extends Node {
  type: "footnoteReference";
  identifier: string;
}

export interface Definition extends Node {
  type: "definition";
  identifier: string;
  title?: string;
  url: string;
}

export interface FootnoteDefinition extends Parent<Paragraph> {
  type: "footnoteDefinition";
  identifier: string;
}

export interface TextNode extends Text {
  type: "text";
}
