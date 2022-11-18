import { useStarStore } from "./zustand";

export function StarCounter() {
  const stars = useStarStore((state) => state.stars);
  return <h1 className='pl-1 text-sky-500'> {stars} Stars</h1>;
}