"use client";
import { useState } from "react";
import Counter from "../components/Counter";

export default function Page() {
  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center w-full h-96">
      <button
        className="px-4 py-2 bg-gray-200 text-black rounded-lg"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </button>
      {show && <Counter />}
    </div>
  );
}
