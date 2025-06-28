import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const AppFetch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

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

  return (
    <>
      <p className="text-danger">{error}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default AppFetch;
