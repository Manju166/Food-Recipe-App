import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome To Recipe App</h1>
      <Link href={"/recipe-list"}>Explore Recipe</Link>
    </>
  );
}
