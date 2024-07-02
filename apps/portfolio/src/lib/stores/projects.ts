import { create } from 'zustand';

interface ProjectsState {
  active: number | null;
  urls: string[];
  setActive: (active: number | null) => void;
}

export const useProjectsStore = create<ProjectsState>((set) => ({
  active: null,
  urls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((u) => `/images/${u}.jpg`),
  setActive: (active) => set({ active }),
}));
