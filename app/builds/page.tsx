import Link from "next/link";

export default async function Page() {
  return (
    <main className='flex flex-col gap-2'>
      <h1 className="text-xl font-bold mb-2">Listagem de builds</h1>
      <Link href="/" className=" hover:bg-amber-300 transition-colors bg-gray-800 rounded-2xl p-2 text-white w-fit">LINK HOMEPAGE</Link>
    </main>
  );
}
