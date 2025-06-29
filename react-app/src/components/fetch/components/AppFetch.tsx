import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../../../services/api-client";
import type { User } from "../../../services/user-services";
import userServices from "../../../services/user-services";

const AppFetch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = userServices.getAllUsers();

    request
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

    return () => cancel();
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
    // apiClient.delete("/users/" + user.id)
    userServices.deleteUser(user).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  }

  function addUser() {
    const newUser = { id: 13, name: "Kalu" };
    const originalUsers = [...users];

    setUsers([newUser, ...users]);

    // apiClient
    //   .post("/users", newUser)

    userServices
      .addUser(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  }

  const updateUser = (user: User) => {
    const originalUser = [...users];
    const updatedUser = { ...user, name: user.name + "++" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    apiClient.patch("/users/" + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };

  return (
    <>
      <p className="text-danger">{error}</p>
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>

      <ul className="list-group ">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}{" "}
            <div>
              <button
                className="btn btn-outline-secondary"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                onClick={() => deleteUser(user)}
                className="btn btn-outline-danger ms-3"
              >
                Delete
              </button>
            </div>{" "}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AppFetch;
