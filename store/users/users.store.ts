import { StateCreator, create } from "zustand";

export type User = {
  id: string;
  name: string;
  email: string;
  //acciones
};

interface UserState {
  users: User[];
}

// crear el estado
const userStore: StateCreator<UserState> = (set, get) => ({
  users: [
    {
      id: "1",
      name: "John",
      email: "jHr8d@example.com",
    }
  ],
});

export const useUserStore = create<UserState>(userStore);
