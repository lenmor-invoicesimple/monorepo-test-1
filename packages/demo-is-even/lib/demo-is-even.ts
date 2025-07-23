import { isOdd } from "demo-is-odd";

export function isEven(num: number): boolean {
  return !isOdd(num);
}