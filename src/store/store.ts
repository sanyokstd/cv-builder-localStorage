import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  userName: string,
  setUserName: (userName: string) => void,
  cv: ICv,
  setCv: (cv: ICv) => void
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      userName: '',
      cv: {
        fullName: '',
        jobTitle: '',
        contacts: []
      },
      setUserName: (userName: string) => set((state) => ({ ...state, userName: userName })),
      setCv: (cv: ICv) => set((state) => ({ ...state, cv: cv }))
    }),
    {
      name: 'cv-storage',
    },
  ),
)