import Link from 'next/link'
import {fetchBuilds} from "./lib/data"

export default async function Home() {
  const builds = await fetchBuilds();

  return (
    <main className="grid gap-2 ">
        <h1 className="text-xl font-bold mb-2">Página inicial</h1>
        <p>Está é uma página temporária para representar o que será uma página inicial</p>
        <Link href="/builds" className=" hover:bg-amber-300 transition-colors bg-gray-800 rounded-2xl p-2 text-white w-fit">
          LINK builds
        </Link>
        {
          builds.map((build) => (<p key={build.id}>{build.title}</p>))
        }
    </main>
  );
}
