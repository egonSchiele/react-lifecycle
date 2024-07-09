import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Count changed", count);
  }, [count]);

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
