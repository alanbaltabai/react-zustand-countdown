import { create } from 'zustand';

const useStore = create((set) => ({
	inLoadingPage: true,
	setInLoadingPage: (value) => set({ inLoadingPage: value }),
}));

export { useStore };
