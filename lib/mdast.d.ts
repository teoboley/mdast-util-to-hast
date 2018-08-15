// MDAST

interface Root extends Parent {
  type: "root";
}

interface Paragraph extends Parent {
  type: "paragraph";
}

interface Blockquote extends Parent {
  type: "blockquote";
}

interface Heading extends Parent {
  type: "heading";
  depth: number;
}

interface Code extends Text {
  type: "code";
  lang?: string;
  info?: string;
}

interface InlineCode extends Text {
  type: "inlineCode";
}

interface YAML extends Text {
  type: "yaml";
}

interface HTML extends Text {
  type: "html";
}

interface List extends Parent<ListItem | List> {
  type: "list";
  ordered: true | false;
  start?: number;
  loose?: true | false;
}

interface ListItem extends Parent {
  type: "listItem";
  loose?: true | false;
  checked?: true | false;
}

interface Table extends Parent<TableRow> {
  type: "table";
  align: alignType[];
}

enum alignType {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
  NULL = null
}

interface TableRow extends Parent<TableCell> {
  type: "tableRow";
}

interface TableCell extends Parent {
  type: "tableCell";
}

interface ThematicBreak extends Node {
  type: "thematicBreak";
}

interface Break extends Node {
  type: "break";
}

interface Emphasis extends Parent {
  type: "emphasis";
}

interface Strong extends Parent {
  type: "strong";
}

interface Delete extends Parent {
  type: "delete";
}

interface Link extends Parent {
  type: "link";
  title?: string;
  url: string;
}

interface Image extends Node {
  type: "image";
  title?: string;
  alt?: string;
  url: string;
}

interface Footnote extends Parent {
  type: "footnote";
}

interface LinkReference extends Parent {
  type: "linkReference";
  identifier: string;
  referenceType: referenceType;
}

enum referenceType {
  SHORTCUT = "shortcut",
  COLLAPSED = "collapsed",
  FULL = "full"
}

interface ImageReference extends Node {
  type: "imageReference";
  identifier: string;
  referenceType: referenceType;
  alt?: string;
}

interface FootnoteReference extends Node {
  type: "footnoteReference";
  identifier: string;
}

interface Definition extends Node {
  type: "definition";
  identifier: string;
  title?: string;
  url: string;
}

interface FootnoteDefinition extends Parent<Paragraph> {
  type: "footnoteDefinition";
  identifier: string;
}

interface TextNode extends Text {
  type: "text";
}
