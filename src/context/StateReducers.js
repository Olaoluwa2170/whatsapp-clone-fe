import { create } from "zustand";

export const useAppStore = create((set) => ({
    userInfo: undefined,
    newUser: false,
    setNewUser: (newUser) => set(() => ({newUser: newUser})),
    setUserInfo: (userInfo) => set(() => ({userInfo: userInfo}))
}))