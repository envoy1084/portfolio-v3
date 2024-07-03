import { create } from 'zustand';

interface ProjectsState {
  active: number | null;
  setActive: (active: number | null) => void;
}

export const useProjectsStore = create<ProjectsState>((set) => ({
  active: null,
  setActive: (active) => set({ active }),
}));
