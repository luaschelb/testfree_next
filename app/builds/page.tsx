import Link from "next/link";

export default async function Page() {
  return (
    <main>
      <div className='grid gap-2 my-48 justify-center'>
        <h1>BUILDS PAGE</h1>
        <Link href="/" className="bg-white rounded-2xl p-2 text-black w-max">LINK HOMEPAGE</Link>
      </div>
    </main>
  );
}
