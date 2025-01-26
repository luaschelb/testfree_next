import Link from 'next/link'
import {fetchBuilds} from "./lib/data"

export default async function Home() {
  const builds = await fetchBuilds();

  return (
    <main>
      <div className='grid gap-2 my-48 justify-center'>
        <h1>HOMEPAGE</h1>
        <Link href="/builds" className="bg-white rounded-2xl p-2 text-black w-max">LINK builds</Link>
        {
          builds.map((build) => (<p key={build.id}>{build.title}</p>))
        }
      </div>
    </main>
  );
}
