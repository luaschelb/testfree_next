import Link from 'next/link'
import {fetchBuilds} from "./lib/data"

export default async function Home() {
  const builds = await fetchBuilds();

  return (
    <div className="text-center">
      <p>HOMEPAGE</p>
      <Link href="/builds">LINK builds</Link>
      {
        builds.map((build) => (<p key={build.id}>{build.title}</p>))
      }
    </div>
  );
}
