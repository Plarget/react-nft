import type {TGetRandomFloat} from "./type.ts";

const getRandomFloat: TGetRandomFloat = (min, max, decimals = 2) => {
  const num = Math.random() * (max - min) + min;
  return Number(num.toFixed(decimals))
}

export default getRandomFloat