import { fetchProjects } from "../lib/data";

export default async function Page() {
  const projects = await fetchProjects();
  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Projects</h1>
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100 text-left">
            <tr className="border-b border-black/40">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Description</th>
              <th className="p-3">Active</th>
            </tr>
          </thead>
          <tbody>
            {projects?.map((p, index) => (
              <tr
                key={p.id}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <td className="p-3">{p.id}</td>
                <td className="p-3">{p.name}</td>
                <td className="p-3">{p.description}</td>
                <td className="p-3">
                  {p.active ? (
                    <span className="text-green-600 font-semibold">Yes</span>
                  ) : (
                    <span className="text-red-600 font-semibold">No</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </main>
  );
}