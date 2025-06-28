import { create } from "zustand";

import { persist, devtools } from "zustand/middleware";

interface LoggedIn {
  LoggedIn: boolean;
  isLoggedIn: (a: boolean) => void;
  isLoggedOut: (a: boolean) => void;
}

const useLogIn = create<LoggedIn>()(
  devtools(
    persist(
      (Set) => ({
        LoggedIn: false,
        isLoggedIn: (a) => Set(() => ({ LoggedIn: a })),
        isLoggedOut: (a) => Set(() => ({ LoggedIn: a })),
      }),
      { name: "LogIn" }
    )
  )
);

export default useLogIn;
