import { createContext } from 'react';

export type UserInfoType = {
  name?: string;
  season?: number;
  group?: string;
  applicationStart: string;
  applicationEnd: string;
  applicationConfirmStart: string;
  applicationConfirmEnd: string;
  applicationPassConfirmStart: string;
  applicationPassConfirmEnd: string;
  finalPassConfirmStart: string;
  finalPassConfirmEnd: string;
  interviewStart: string;
  interviewEnd: string;
};

export interface UserInfoContextType {
  userInfo: UserInfoType;
  handleSaveUserInfo: (obj: UserInfoType) => void;
}

export const UserInfoContext = createContext<UserInfoContextType>({
  userInfo: {},
  handleSaveUserInfo: () => {},
});
