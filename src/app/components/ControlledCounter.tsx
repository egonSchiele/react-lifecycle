import { useEffect } from "react";

export default function ControlledCounter({
  count,
  setCount,
  printCount,
}: {
  count: number;
  setCount: (count: number) => void;
  printCount: () => void;
}) {
  useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Count changed");
  }, [count]);

  useEffect(() => {
    console.log("setCount changed");
  }, [setCount]);

  useEffect(() => {
    console.log("printCount changed");
  }, [printCount]);

  /*   useEffect(() => {
        console.log("rendered");
      });
     */

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-9xl">{count}</h1>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-gray-200 text-black rounded-lg"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-gray-200 text-black rounded-lg"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
