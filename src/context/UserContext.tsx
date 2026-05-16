import { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  name: string;
  id: string;
  initials: string;
  avatar: string;
  role?: string;
}

const USERS: User[] = [
  { name: "Shihal Munim Hasan", id: "989800", initials: "SM", avatar: "https://i.pravatar.cc/300?u=989800", role: "Executive" },
  { name: "Monahil Hossain", id: "989801", initials: "MH", avatar: "https://i.pravatar.cc/300?u=989801", role: "HR Operations" },
  { name: "Khalid Mridha", id: "989802", initials: "KM", avatar: "https://i.pravatar.cc/300?u=989802", role: "Manager" }
];

interface UserContextType {
  currentUser: User;
  switchUser: (index: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  const switchUser = (index: number) => {
    setCurrentUserIndex(index);
  };

  return (
    <UserContext.Provider value={{ currentUser: USERS[currentUserIndex], switchUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
}
