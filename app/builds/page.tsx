import Link from "next/link";

export default async function Page() {
  return (
    <main>
      <div className='flex flex-row gap-2'>
        <h1 className="text-xl font-bold mb-2">Listagem de builds</h1>
        <Link href="/" className="bg-gray-800 rounded-2xl p-2 text-white w-max">LINK HOMEPAGE</Link>
      </div>
    </main>
  );
}
