import Link from "next/link";

export default function Home() {
  return (
    <div className="center">
      <p>only 5% of the world's population can match the cards</p>
      <p>show us how smart you are !</p>
      <div className="button">
        <Link href="/game">
          <a className="start"> Start flipping </a>
        </Link>
      </div>
    </div>
  );
}
