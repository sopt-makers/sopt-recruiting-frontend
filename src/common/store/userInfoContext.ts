import { createContext } from 'react';

export type UserInfoType = { name?: string; phone?: string; email?: string; season?: number; group?: string };

export interface UserInfoContextType {
  userInfo: UserInfoType;
  handleSaveUserInfo: (obj: UserInfoType) => void;
}

export const UserInfoContext = createContext<UserInfoContextType>({
  userInfo: {},
  handleSaveUserInfo: () => {},
});
