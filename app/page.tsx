import Link from 'next/link'
import {fetchBuilds} from "./lib/data"

export default async function Home() {
  const builds = await fetchBuilds();

  return (
    <div className="container">
      <h1>HOMEPAGE</h1>
      <Link href="/projetos">LINK Projetos</Link>
      {
        builds.map((build) => (<p key={build.id}>{build.title}</p>))
      }
    </div>
  );
}
