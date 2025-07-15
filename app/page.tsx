import { getUsers } from "./lib/dtos/user";

export default async function Home() {
  const users = await getUsers();
  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <div>
        <h2 className="text-2xl font-bold mb-2">Users</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr
                key={user.id}
                className={index % 2 === 0 ? "table-row-alt" : ""}
              >
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis
          ut dolor non tristique. Cras posuere tincidunt arcu fermentum
          suscipit. Proin vehicula tempus interdum. Aliquam tincidunt luctus
          enim, sit amet finibus lectus fermentum et. Ut gravida orci in mauris
          egestas, non ultrices nibh ultrices. In sapien dui, vestibulum quis
          eros eu, ultricies vestibulum nibh. Proin id rhoncus dolor. Nunc
          fermentum dolor tincidunt bibendum malesuada.
        </p>
        <p className="mt-4">
          Ut a mi tellus. Duis aliquet, magna ac vulputate fermentum, dolor
          neque ultrices ipsum, nec bibendum nisl enim vel ligula. Maecenas
          lectus arcu, sollicitudin quis tristique at, consectetur eget purus.
          Cras at vestibulum massa, ac fringilla massa. Fusce condimentum risus
          ut eros malesuada, quis dignissim mauris porttitor. Aliquam convallis
          mattis ligula, in commodo quam interdum et. Nam vel varius dui. Duis
          congue odio orci.
        </p>
      </div>
    </main>
  );
}