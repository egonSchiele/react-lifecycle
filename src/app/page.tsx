import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="flex flex-col items-center gap-4">
        <li>
          <a href="/01-basic">01-basic</a>
        </li>
        <li>
          <a href="/02-show-hide">02-show/hide</a>
        </li>
        <li>
          <a href="/03-controlled">03-controlled</a>
        </li>
      </ul>
    </main>
  );
}
