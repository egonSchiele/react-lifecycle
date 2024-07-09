"use client";
import { useState } from "react";
import ControlledCounter from "../components/ControlledCounter";

export default function Page() {
  const [count, setCount] = useState(0);
  function printCount() {
    console.log(count);
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-96 ">
      <ControlledCounter
        count={count}
        setCount={setCount}
        printCount={printCount}
      />
    </div>
  );
}
