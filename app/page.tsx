import { redirect } from 'next/navigation';

export default async function Home() {

  if(true)
  {
    redirect("/login")
  }

  return (
    <main className="grid gap-2 ">
    </main>
  );
}
