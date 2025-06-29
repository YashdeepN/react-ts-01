import create from "./https-service";

export interface User {
  id: number;
  name: string;
}

// class UserService {
//   getAllUsers() {
//     const controller = new AbortController();

//     const request = apiClient.get<User[]>("/users", {
//       signal: controller.signal,
//     });
//     return { request, cancel: () => controller.abort() };
//   }

//   deleteUser(user: User) {
//     return apiClient.delete("/users/" + user.id);
//   }

//   addUser(newUser: User) {
//     return apiClient.post("/users", newUser);
//   }

//   updateUser(user: User) {
//     return apiClient.patch("/users/" + user.id, user);
//   }
// }

export default create("/users");
