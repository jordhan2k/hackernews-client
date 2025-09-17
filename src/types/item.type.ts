export type ItemType = "job" | "story" | "comment" | "poll" | "pollopt";

export interface IItem {
  id: number;
  deleted?: boolean;
  type: ItemType;
  by?: string;
  time: number; // Unix time
  text?: string;
  dead?: boolean;
  parent?: number;
  poll?: number;
  kids?: number[];
  url?: string;
  score?: number;
  title?: string;
  parts?: number[];
  descendants?: number;
}

export interface IGetIdBatch {
  data: IItem[];
  next: number | null;
}
