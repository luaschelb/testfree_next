import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <h1>HOMEPAGE</h1>
      <Link href="/projetos">LINK Projetos</Link>
    </div>
  );
}
