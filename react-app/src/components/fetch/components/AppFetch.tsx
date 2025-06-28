import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const AppFetch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    //   .finally(() => {
    //     setIsLoading(false);
    //   });

    return () => controller.abort();
  }, []);

  // That was fetching using promise
  // Now we'll fetch using async await

  //   useEffect(() => {
  //     async function fetchUser() {
  //       try {
  //         const res = await axios.get<User[]>(
  //           "https://jsonplaceholder.typicode.com/users"
  //         );
  //         setUsers(res.data);
  //       } catch (err) {
  //         setError((err as AxiosError).message);
  //       }
  //     }

  //     fetchUser();
  //   }, []);

  function deleteUser(user: User) {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  }

  return (
    <>
      <p className="text-danger">{error}</p>
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group ">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}{" "}
            <button
              onClick={() => deleteUser(user)}
              className="btn btn-outline-danger"
            >
              Delete
            </button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AppFetch;
