import { Planet } from "./planet";

export interface Output {
  count: number;
  next: string;
  previous: string | null;
  results: Planet[]
}
